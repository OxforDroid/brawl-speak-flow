import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { VOICE_LINES } from "@/data/characters";
import { VoiceCard } from "@/components/VoiceCard";
import { useFavorites } from "@/lib/favorites";
import { sfx } from "@/lib/audio";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: FeedPage,
  head: () => ({
    meta: [
      { title: "Feed — Brawl Lingo" },
      { name: "description", content: "Swipe through Brawler voice lines and learn English phrases." },
    ],
  }),
});

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function FeedPage() {
  const [lines, setLines] = useState<typeof VOICE_LINES>(VOICE_LINES);
  useEffect(() => { setLines(shuffle(VOICE_LINES)); }, []);
  const { has, toggle } = useFavorites();
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.6) {
            const i = Number((e.target as HTMLElement).dataset.idx);
            setActiveIdx(i);
            sfx("swipe");
          }
        });
      },
      { root: el, threshold: [0.6] }
    );
    el.querySelectorAll<HTMLElement>("[data-card]").forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [lines.length]);

  return (
    <main className="relative">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-30 px-4 pt-4 pointer-events-none">
        <div className="mx-auto max-w-md flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/70 backdrop-blur border border-border">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold tracking-tight">
              <span className="text-gradient-brawl">Brawl</span> Lingo
            </span>
          </div>
          <span className="text-xs text-muted-foreground font-mono">
            {activeIdx + 1}/{lines.length}
          </span>
        </div>
      </header>

      <div
        ref={containerRef}
        className="snap-y-page overflow-y-scroll no-scrollbar h-[100dvh]"
      >
        {lines.map((line, i) => (
          <div key={line.id} data-card data-idx={i}>
            <VoiceCard
              line={line}
              isActive={i === activeIdx}
              isFav={has(line.id)}
              onToggleFav={toggle}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
