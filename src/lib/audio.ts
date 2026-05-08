// Lightweight audio helpers: TTS for English voice lines + SFX via WebAudio.

export function speak(text: string, opts?: { rate?: number; pitch?: number }) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = opts?.rate ?? 1;
  u.pitch = opts?.pitch ?? 1.05;
  // Pick a punchy English voice if available
  const voices = window.speechSynthesis.getVoices();
  const v = voices.find((x) => /en[-_]US/i.test(x.lang)) || voices.find((x) => /^en/i.test(x.lang));
  if (v) u.voice = v;
  window.speechSynthesis.speak(u);
  return u;
}

export function stopSpeaking() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

let ctx: AudioContext | null = null;
function getCtx() {
  if (typeof window === "undefined") return null;
  if (!ctx) ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  return ctx;
}

export function sfx(kind: "tap" | "swipe" | "success" | "fail" | "fav") {
  const c = getCtx();
  if (!c) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.connect(g); g.connect(c.destination);
  const now = c.currentTime;
  const map = {
    tap: { f: 520, t: "triangle", d: 0.07, v: 0.06 },
    swipe: { f: 280, t: "sine", d: 0.12, v: 0.05 },
    success: { f: 660, t: "triangle", d: 0.18, v: 0.08 },
    fail: { f: 180, t: "sawtooth", d: 0.22, v: 0.07 },
    fav: { f: 880, t: "triangle", d: 0.12, v: 0.07 },
  } as const;
  const p = map[kind];
  o.type = p.t as OscillatorType;
  o.frequency.setValueAtTime(p.f, now);
  if (kind === "success") o.frequency.linearRampToValueAtTime(p.f * 1.5, now + p.d);
  if (kind === "fail") o.frequency.linearRampToValueAtTime(p.f * 0.6, now + p.d);
  g.gain.setValueAtTime(p.v, now);
  g.gain.exponentialRampToValueAtTime(0.0001, now + p.d);
  o.start(now);
  o.stop(now + p.d + 0.02);
}
