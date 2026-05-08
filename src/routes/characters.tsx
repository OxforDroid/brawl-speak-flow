import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { VOICE_LINES, RARITY_LABELS, type Rarity } from "@/data/characters";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useFavorites } from "@/lib/favorites";
import { speak, sfx } from "@/lib/audio";

export const Route = createFileRoute("/characters")({
  component: CharactersPage,
  head: () => ({ meta: [{ title: "Heroes — Brawl Lingo" }] }),
});

const RARITIES: (Rarity | "all")[] = ["all", "rare", "epic", "mythic", "legendary", "chromatic"];

function CharactersPage() {
  const [q, setQ] = useState("");
  const [rarity, setRarity] = useState<Rarity | "all">("all");
  const { has, toggle } = useFavorites();

  const filtered = useMemo(() => {
    return VOICE_LINES.filter((l) => {
      if (rarity !== "all" && l.rarity !== rarity) return false;
      if (!q.trim()) return true;
      const s = q.toLowerCase();
      return l.character.toLowerCase().includes(s) || l.english.toLowerCase().includes(s) || l.russian.toLowerCase().includes(s);
    });
  }, [q, rarity]);

  return (
    <main className="px-4 pt-6 pb-24 max-w-md mx-auto">
      <h1 className="text-3xl font-black mb-1">All <span className="text-gradient-brawl">Brawlers</span></h1>
      <p className="text-sm text-muted-foreground mb-5">{filtered.length} voice lines</p>

      <div className="relative mb-3">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search characters or phrases…" className="pl-9 h-12 rounded-2xl bg-card/70 border-border" />
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3 -mx-1 px-1">
        {RARITIES.map((r) => {
          const active = rarity === r;
          return (
            <button
              key={r}
              onClick={() => { setRarity(r); sfx("tap"); }}
              className={`shrink-0 px-4 h-9 rounded-full text-xs font-bold uppercase tracking-wider transition-all
                ${active ? "gradient-pink-purple text-primary-foreground glow-primary" : "bg-card/70 border border-border text-muted-foreground"}`}
            >
              {r === "all" ? "All" : RARITY_LABELS[r]}
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {filtered.map((line, i) => (
          <motion.button
            key={line.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.02 }}
            onClick={() => { sfx("tap"); speak(line.english); }}
            className={`relative text-left rounded-3xl p-4 overflow-hidden ${line.gradient} aspect-[4/5] flex flex-col justify-between shadow-card`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            <div className="relative flex items-start justify-between">
              <span className="text-[9px] font-bold uppercase tracking-widest text-white/90 px-2 py-1 rounded-full bg-black/30 backdrop-blur">{RARITY_LABELS[line.rarity]}</span>
              <button
                onClick={(e) => { e.stopPropagation(); sfx("fav"); toggle(line.id); }}
                className={`text-lg ${has(line.id) ? "text-red-400" : "text-white/60"}`}
              >♥</button>
            </div>
            <div className="relative text-center text-5xl">{line.emoji}</div>
            <div className="relative">
              <div className="text-xs font-black uppercase tracking-wider text-white">{line.character}</div>
              <div className="text-[11px] text-white/85 line-clamp-2 mt-0.5">"{line.english}"</div>
            </div>
          </motion.button>
        ))}
      </div>
    </main>
  );
}
