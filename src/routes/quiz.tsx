import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { VOICE_LINES, type VoiceLine } from "@/data/characters";
import { speak, sfx } from "@/lib/audio";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Flame, Trophy, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/quiz")({
  component: QuizPage,
  head: () => ({ meta: [{ title: "Quiz — Brawl Lingo" }] }),
});

function pickQuestion(exclude?: string) {
  const pool = VOICE_LINES.filter((l) => l.id !== exclude);
  const correct = pool[Math.floor(Math.random() * pool.length)];
  const wrongPool = VOICE_LINES.filter((l) => l.id !== correct.id);
  const wrongs: VoiceLine[] = [];
  while (wrongs.length < 3) {
    const c = wrongPool[Math.floor(Math.random() * wrongPool.length)];
    if (!wrongs.find((w) => w.id === c.id)) wrongs.push(c);
  }
  const options = [correct, ...wrongs].sort(() => Math.random() - 0.5);
  return { correct, options };
}

function QuizPage() {
  const [q, setQ] = useState(() => pickQuestion());
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    return Number(localStorage.getItem("brawl-lingo:best") || 0);
  });

  useEffect(() => {
    const t = setTimeout(() => speak(q.correct.english), 250);
    return () => clearTimeout(t);
  }, [q]);

  const choose = (id: string) => {
    if (picked) return;
    setPicked(id);
    if (id === q.correct.id) {
      sfx("success");
      setScore((s) => s + 1);
      setStreak((s) => {
        const next = s + 1;
        if (next > best) { setBest(next); localStorage.setItem("brawl-lingo:best", String(next)); }
        return next;
      });
    } else {
      sfx("fail");
      setStreak(0);
    }
    setTimeout(() => {
      setPicked(null);
      setQ(pickQuestion(q.correct.id));
    }, 1200);
  };

  const reset = () => { setScore(0); setStreak(0); setQ(pickQuestion()); };

  return (
    <main className="px-4 pt-6 pb-28 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-black">Quiz <span className="text-gradient-brawl">mode</span></h1>
        <button onClick={reset} className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground">
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-5">
        <Stat icon={<Trophy className="h-4 w-4" />} label="Score" value={score} grad="gradient-gold" />
        <Stat icon={<Flame className="h-4 w-4" />} label="Streak" value={streak} grad="gradient-pink-purple" />
        <Stat icon={<Trophy className="h-4 w-4" />} label="Best" value={best} grad="gradient-cyan-blue" />
      </div>

      <div className="rounded-3xl gradient-card border border-border p-6 text-center shadow-card mb-5">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Listen & translate</p>
        <button
          onClick={() => { sfx("tap"); speak(q.correct.english); }}
          className="mx-auto h-20 w-20 rounded-full gradient-brawl flex items-center justify-center glow-primary animate-pulse-glow"
        >
          <Volume2 className="h-8 w-8 text-primary-foreground" />
        </button>
        <p className="mt-4 text-sm text-muted-foreground">Tap to replay</p>
      </div>

      <div className="space-y-3">
        <AnimatePresence mode="wait">
          {q.options.map((opt, i) => {
            const isCorrect = opt.id === q.correct.id;
            const isPicked = picked === opt.id;
            const reveal = picked !== null;
            const stateClass = !reveal
              ? "bg-card border-border hover:border-primary/60"
              : isCorrect
                ? "bg-gradient-to-r from-emerald-500/30 to-emerald-500/10 border-emerald-400"
                : isPicked
                  ? "bg-gradient-to-r from-red-500/30 to-red-500/10 border-red-400"
                  : "bg-card border-border opacity-50";
            return (
              <motion.button
                key={`${q.correct.id}-${opt.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => choose(opt.id)}
                disabled={!!picked}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${stateClass}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{opt.emoji}</span>
                  <span className="text-base font-semibold flex-1">«{opt.russian}»</span>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
    </main>
  );
}

function Stat({ icon, label, value, grad }: { icon: React.ReactNode; label: string; value: number; grad: string }) {
  return (
    <div className={`relative rounded-2xl p-3 overflow-hidden ${grad} shadow-card`}>
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative">
        <div className="flex items-center gap-1 text-white/85 text-[10px] uppercase tracking-wider font-bold">
          {icon} {label}
        </div>
        <div className="text-2xl font-black text-white mt-1">{value}</div>
      </div>
    </div>
  );
}
