export type Rarity = "rare" | "epic" | "mythic" | "legendary" | "chromatic";

export interface VoiceLine {
  id: string;
  character: string;
  rarity: Rarity;
  gradient: string; // tailwind utility class
  emoji: string;
  english: string;
  russian: string;
  context?: string;
}

export const RARITY_LABELS: Record<Rarity, string> = {
  rare: "Rare",
  epic: "Epic",
  mythic: "Mythic",
  legendary: "Legendary",
  chromatic: "Chromatic",
};

export const VOICE_LINES: VoiceLine[] = [
  { id: "leon-1", character: "Leon", rarity: "legendary", gradient: "gradient-cyan-blue", emoji: "🦎",
    english: "You can't see me!", russian: "Ты меня не видишь!", context: "When using Smoke Bomb" },
  { id: "leon-2", character: "Leon", rarity: "legendary", gradient: "gradient-cyan-blue", emoji: "🦎",
    english: "Stay sharp!", russian: "Будь начеку!" },
  { id: "spike-1", character: "Spike", rarity: "legendary", gradient: "gradient-gold", emoji: "🌵",
    english: "I'm a little prickly!", russian: "Я немного колючий!" },
  { id: "spike-2", character: "Spike", rarity: "legendary", gradient: "gradient-gold", emoji: "🌵",
    english: "Bloom and boom!", russian: "Цвети и греми!" },
  { id: "crow-1", character: "Crow", rarity: "legendary", gradient: "gradient-pink-purple", emoji: "🐦‍⬛",
    english: "Caw caw, sucker!", russian: "Кар-кар, неудачник!" },
  { id: "crow-2", character: "Crow", rarity: "legendary", gradient: "gradient-pink-purple", emoji: "🐦‍⬛",
    english: "Death from above!", russian: "Смерть с небес!" },
  { id: "shelly-1", character: "Shelly", rarity: "rare", gradient: "gradient-cyan-blue", emoji: "🔫",
    english: "Let's rock and roll!", russian: "Поехали зажигать!" },
  { id: "shelly-2", character: "Shelly", rarity: "rare", gradient: "gradient-cyan-blue", emoji: "🔫",
    english: "Time to break some bones!", russian: "Пора ломать кости!" },
  { id: "colt-1", character: "Colt", rarity: "rare", gradient: "gradient-gold", emoji: "🤠",
    english: "Reach for the sky!", russian: "Руки вверх!" },
  { id: "bull-1", character: "Bull", rarity: "rare", gradient: "gradient-pink-purple", emoji: "🐂",
    english: "Bring it on!", russian: "Давай, налетай!" },
  { id: "elprimo-1", character: "El Primo", rarity: "epic", gradient: "gradient-pink-purple", emoji: "🤼",
    english: "I am unstoppable!", russian: "Меня не остановить!" },
  { id: "elprimo-2", character: "El Primo", rarity: "epic", gradient: "gradient-pink-purple", emoji: "🤼",
    english: "Feel the fire!", russian: "Почувствуй огонь!" },
  { id: "poco-1", character: "Poco", rarity: "rare", gradient: "gradient-gold", emoji: "🎸",
    english: "Let's start the show!", russian: "Начнём шоу!" },
  { id: "barley-1", character: "Barley", rarity: "rare", gradient: "gradient-gold", emoji: "🍸",
    english: "What can I get you?", russian: "Что вам подать?" },
  { id: "jessie-1", character: "Jessie", rarity: "rare", gradient: "gradient-cyan-blue", emoji: "⚡",
    english: "Eureka!", russian: "Эврика!" },
  { id: "nita-1", character: "Nita", rarity: "rare", gradient: "gradient-gold", emoji: "🐻",
    english: "Bear hug!", russian: "Медвежьи объятия!" },
  { id: "brock-1", character: "Brock", rarity: "rare", gradient: "gradient-pink-purple", emoji: "🚀",
    english: "Rock and roll, baby!", russian: "Зажжём, детка!" },
  { id: "dyna-1", character: "Dynamike", rarity: "rare", gradient: "gradient-gold", emoji: "💣",
    english: "Fire in the hole!", russian: "Ложись!" },
  { id: "tick-1", character: "Tick", rarity: "epic", gradient: "gradient-cyan-blue", emoji: "💥",
    english: "Tick-tock, boom!", russian: "Тик-так, бум!" },
  { id: "8bit-1", character: "8-Bit", rarity: "epic", gradient: "gradient-pink-purple", emoji: "🕹️",
    english: "Game on!", russian: "Игра началась!" },
  { id: "rico-1", character: "Rico", rarity: "epic", gradient: "gradient-cyan-blue", emoji: "🤖",
    english: "Bounce, bounce!", russian: "Прыг-скок!" },
  { id: "darryl-1", character: "Darryl", rarity: "epic", gradient: "gradient-pink-purple", emoji: "🛢️",
    english: "Roll out!", russian: "Покатили!" },
  { id: "penny-1", character: "Penny", rarity: "epic", gradient: "gradient-gold", emoji: "🏴‍☠️",
    english: "Dead men tell no tales!", russian: "Мёртвые не болтают!" },
  { id: "carl-1", character: "Carl", rarity: "epic", gradient: "gradient-cyan-blue", emoji: "⛏️",
    english: "Time to dig in!", russian: "Пора копать!" },
  { id: "jacky-1", character: "Jacky", rarity: "epic", gradient: "gradient-gold", emoji: "👷",
    english: "Let's get to work!", russian: "Приступим к работе!" },
  { id: "piper-1", character: "Piper", rarity: "epic", gradient: "gradient-pink-purple", emoji: "☂️",
    english: "Charmed, I'm sure!", russian: "Очарована, уверена!" },
  { id: "pam-1", character: "Pam", rarity: "epic", gradient: "gradient-pink-purple", emoji: "🛡️",
    english: "Mama's here!", russian: "Мама здесь!" },
  { id: "frank-1", character: "Frank", rarity: "epic", gradient: "gradient-cyan-blue", emoji: "🔨",
    english: "Smash time!", russian: "Время крушить!" },
  { id: "bibi-1", character: "Bibi", rarity: "epic", gradient: "gradient-pink-purple", emoji: "🍬",
    english: "Batter up!", russian: "К бою!" },
  { id: "sandy-1", character: "Sandy", rarity: "legendary", gradient: "gradient-gold", emoji: "🏜️",
    english: "Sweet dreams!", russian: "Сладких снов!" },
  { id: "tara-1", character: "Tara", rarity: "legendary", gradient: "gradient-pink-purple", emoji: "🔮",
    english: "Your fate is sealed!", russian: "Твоя судьба решена!" },
  { id: "amber-1", character: "Amber", rarity: "legendary", gradient: "gradient-gold", emoji: "🔥",
    english: "Burn, baby, burn!", russian: "Гори, малыш, гори!" },
  { id: "edgar-1", character: "Edgar", rarity: "chromatic", gradient: "gradient-pink-purple", emoji: "😈",
    english: "Whatever!", russian: "Да пофиг!" },
  { id: "surge-1", character: "Surge", rarity: "chromatic", gradient: "gradient-cyan-blue", emoji: "⚡",
    english: "Power up!", russian: "Заряжайся!" },
  { id: "colette-1", character: "Colette", rarity: "chromatic", gradient: "gradient-pink-purple", emoji: "💖",
    english: "I love you!", russian: "Я тебя люблю!" },
  { id: "lou-1", character: "Lou", rarity: "chromatic", gradient: "gradient-cyan-blue", emoji: "🍦",
    english: "Stay cool!", russian: "Сохраняй спокойствие!" },
];

export const CHARACTERS = Array.from(
  new Map(VOICE_LINES.map((v) => [v.character, { name: v.character, emoji: v.emoji, rarity: v.rarity, gradient: v.gradient }])).values()
);
