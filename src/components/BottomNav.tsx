import { Link, useLocation } from "@tanstack/react-router";
import { Home, Users, Heart, Shuffle, Brain } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { to: "/", label: "Feed", icon: Home },
  { to: "/characters", label: "Heroes", icon: Users },
  { to: "/random", label: "Random", icon: Shuffle },
  { to: "/favorites", label: "Saved", icon: Heart },
  { to: "/quiz", label: "Quiz", icon: Brain },
] as const;

export function BottomNav() {
  const loc = useLocation();
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 px-3 pb-3 pt-2 pointer-events-none">
      <div className="mx-auto max-w-md pointer-events-auto">
        <div className="relative rounded-3xl border border-border bg-card/80 backdrop-blur-xl shadow-card px-2 py-2 flex items-center justify-between">
          {items.map(({ to, label, icon: Icon }) => {
            const active = loc.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className="relative flex-1 flex flex-col items-center justify-center py-2 rounded-2xl text-[10px] font-semibold uppercase tracking-wide"
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-1 rounded-2xl gradient-pink-purple opacity-90"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 flex flex-col items-center gap-0.5 ${active ? "text-primary-foreground" : "text-muted-foreground"}`}>
                  <Icon className="h-5 w-5" strokeWidth={2.4} />
                  <span>{label}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
