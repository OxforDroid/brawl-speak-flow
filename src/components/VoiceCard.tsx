import { motion, AnimatePresence } from "framer-motion";
import { Heart, Play, Share2, Volume2, Pause } from "lucide-react";
import { useEffect, useState } from "react";
import type { VoiceLine } from "@/data/characters";
import { RARITY_LABELS } from "@/data/characters";
import { speak, stopSpeaking, sfx } from "@/lib/audio";
import { toast } from "sonner";

interface Props {
  line: VoiceLine;
  isActive: boolean;
  isFav: boolean;
  onToggleFav: (id: string) => void;
}

export function VoiceCard({ line, isActive, isFav, onToggleFav }: Props) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setPlaying(false);
      stopSpeaking();
      return;
    }
    // autoplay
    const t = setTimeout(() => handlePlay(), 350);
    return () => { clearTimeout(t); stopSpeaking(); setPlaying(false); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, line.id]);

  const handlePlay = () => {
    sfx("tap");
    stopSpeaking();
    const u = speak(line.english);
    if (!u) return;
    setPlaying(true);
    u.onend = () => setPlaying(false);
    u.onerror = () => setPlaying(false);
  };

  const handleShare = async () => {
    sfx("tap");
    const text = `"${line.english}" — ${line.character} (${line.russian})`;
    try {
      if (navigator.share) await navigator.share({ title: "Brawl Lingo", text });
      else { await navigator.clipboard.writeText(text); toast.success("Copied to clipboard"); }
    } catch {/* user cancelled */}
  };

  const handleFav = () => {
    sfx("fav");
    onToggleFav(line.id);
  };

  return (
    <div className="h-[100dvh] w-full snap-start flex items-center justify-center px-4 pt-4 pb-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-md aspect-[3/4.6] rounded-[2rem] overflow-hidden shadow-card"
      >
        {/* Gradient bg */}
        <div className={`absolute inset-0 ${line.gradient} opacity-90`} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/70" />
        {/* Texture dots */}
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "18px 18px" }} />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col p-6">
          {/* Top: rarity + character */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-black/30 backdrop-blur border border-white/15 text-white">
              {RARITY_LABELS[line.rarity]}
            </span>
            <span className="text-[10px] font-mono text-white/70">brawl·lingo</span>
          </div>

          {/* Character emoji centered */}
          <div className="flex-1 flex flex-col items-center justify-center gap-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={line.id}
                initial={{ scale: 0.6, rotate: -10, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className={`relative text-[8rem] leading-none drop-shadow-[0_8px_30px_rgba(0,0,0,0.5)] ${playing ? "animate-pulse-glow rounded-full" : ""}`}
              >
                {line.emoji}
              </motion.div>
            </AnimatePresence>
            <h2 className="text-3xl font-black text-white drop-shadow-md tracking-tight">{line.character}</h2>
          </div>

          {/* Bottom: phrases */}
          <div className="space-y-3">
            <div className="rounded-2xl bg-black/35 backdrop-blur-xl border border-white/15 p-4">
              <div className="flex items-start gap-2">
                <Volume2 className="h-4 w-4 mt-1 text-white/70 shrink-0" />
                <p className="text-xl font-bold text-white leading-snug">"{line.english}"</p>
              </div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-base text-white/85 italic">«{line.russian}»</p>
              </div>
              {line.context && (
                <p className="mt-2 text-[11px] uppercase tracking-wider text-white/50">{line.context}</p>
              )}
            </div>
          </div>
        </div>

        {/* Side actions */}
        <div className="absolute right-3 bottom-44 z-20 flex flex-col gap-3">
          <ActionButton onClick={handlePlay} active={playing} aria-label="Play voice line">
            {playing ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
          </ActionButton>
          <ActionButton onClick={handleFav} active={isFav} aria-label="Favorite">
            <Heart className={`h-6 w-6 ${isFav ? "fill-current" : ""}`} />
          </ActionButton>
          <ActionButton onClick={handleShare} aria-label="Share">
            <Share2 className="h-6 w-6" />
          </ActionButton>
        </div>
      </motion.div>
    </div>
  );
}

function ActionButton({ children, active, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: 1.06 }}
      className={`h-12 w-12 rounded-full flex items-center justify-center backdrop-blur-xl border transition-colors
        ${active ? "bg-primary text-primary-foreground border-primary glow-primary" : "bg-black/40 text-white border-white/20 hover:bg-black/60"}`}
      {...(rest as any)}
    >
      {children}
    </motion.button>
  );
}
