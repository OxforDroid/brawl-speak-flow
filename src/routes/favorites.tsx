import { createFileRoute, Link } from "@tanstack/react-router";
import { VOICE_LINES } from "@/data/characters";
import { useFavorites } from "@/lib/favorites";
import { speak, sfx } from "@/lib/audio";
import { Heart, Play, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/favorites")({
  component: FavoritesPage,
  head: () => ({ meta: [{ title: "Favorites — Brawl Lingo" }] }),
});

function FavoritesPage() {
  const { ids, has, toggle } = useFavorites();
  const items = VOICE_LINES.filter((l) => has(l.id));

  return (
    <main className="px-4 pt-6 pb-24 max-w-md mx-auto">
      <h1 className="text-3xl font-black mb-1">Your <span className="text-gradient-brawl">Saved</span></h1>
      <p className="text-sm text-muted-foreground mb-5">{items.length} phrase{items.length === 1 ? "" : "s"} saved</p>

      {items.length === 0 ? (
        <div className="rounded-3xl border border-border bg-card/50 backdrop-blur p-10 text-center">
          <Heart className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
          <p className="font-semibold">No favorites yet</p>
          <p className="text-sm text-muted-foreground mt-1 mb-4">Tap the heart on any card to save it for later.</p>
          <Link to="/" className="inline-block px-5 py-2.5 rounded-full gradient-pink-purple text-primary-foreground font-bold text-sm">Open the feed</Link>
        </div>
      ) : (
        <ul className="space-y-3">
          {items.map((line, i) => (
            <motion.li
              key={line.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04 }}
              className={`relative rounded-3xl p-4 overflow-hidden ${line.gradient} shadow-card flex items-center gap-4`}
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative text-4xl">{line.emoji}</div>
              <div className="relative flex-1 min-w-0">
                <div className="text-xs font-black uppercase tracking-widest text-white/80">{line.character}</div>
                <div className="text-sm font-bold text-white truncate">"{line.english}"</div>
                <div className="text-xs text-white/80 italic truncate">«{line.russian}»</div>
              </div>
              <div className="relative flex items-center gap-2">
                <button onClick={() => { sfx("tap"); speak(line.english); }} className="h-10 w-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30">
                  <Play className="h-4 w-4 ml-0.5" />
                </button>
                <button onClick={() => { sfx("fav"); toggle(line.id); }} className="h-10 w-10 rounded-full bg-black/30 backdrop-blur flex items-center justify-center text-white">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </motion.li>
          ))}
        </ul>
      )}
    </main>
  );
}
