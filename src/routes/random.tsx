import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { VOICE_LINES } from "@/data/characters";
import { VoiceCard } from "@/components/VoiceCard";
import { useFavorites } from "@/lib/favorites";
import { Shuffle } from "lucide-react";
import { sfx } from "@/lib/audio";
import { motion } from "framer-motion";

export const Route = createFileRoute("/random")({
  component: RandomPage,
  head: () => ({ meta: [{ title: "Random — Brawl Lingo" }] }),
});

function RandomPage() {
  const { has, toggle } = useFavorites();
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * VOICE_LINES.length));
  const [key, setKey] = useState(0);
  const line = VOICE_LINES[idx];

  const reroll = () => {
    sfx("swipe");
    let n = idx;
    while (n === idx) n = Math.floor(Math.random() * VOICE_LINES.length);
    setIdx(n);
    setKey((k) => k + 1);
  };

  return (
    <main className="relative">
      <motion.div key={key}>
        <VoiceCard line={line} isActive isFav={has(line.id)} onToggleFav={toggle} />
      </motion.div>

      <div className="fixed bottom-24 inset-x-0 z-30 flex justify-center pointer-events-none">
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={reroll}
          className="pointer-events-auto px-6 h-14 rounded-full gradient-brawl text-primary-foreground font-black text-sm uppercase tracking-wider flex items-center gap-2 glow-primary shadow-card"
        >
          <Shuffle className="h-5 w-5" />
          Another one
        </motion.button>
      </div>
    </main>
  );
}
