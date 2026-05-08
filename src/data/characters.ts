export type Rarity = "rare" | "epic" | "mythic" | "legendary" | "chromatic";

export interface VoiceLine {
  id: string;
  character: string;
  rarity: Rarity;
  gradient: string;
  emoji: string;
  image?: string;
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
  { id: "shelly-1", character: "Shelly", rarity: "rare", gradient: "gradient-cyan-blue", emoji: "🔫", image: "https://cdn.brawlify.com/brawlers/borderless/16000000.png", english: "Let's rock and roll!", russian: "Поехали зажигать!" },
  { id: "shelly-2", character: "Shelly", rarity: "rare", gradient: "gradient-cyan-blue", emoji: "🔫", image: "https://cdn.brawlify.com/brawlers/borderless/16000000.png", english: "Time to break some bones!", russian: "Пора ломать кости!" },
  { id: "colt-1", character: "Colt", rarity: "rare", gradient: "gradient-gold", emoji: "🤠", image: "https://cdn.brawlify.com/brawlers/borderless/16000001.png", english: "Reach for the sky!", russian: "Руки вверх!" },
  { id: "colt-2", character: "Colt", rarity: "rare", gradient: "gradient-gold", emoji: "🤠", image: "https://cdn.brawlify.com/brawlers/borderless/16000001.png", english: "Lock and load!", russian: "Заряжай и пали!" },
  { id: "bull-1", character: "Bull", rarity: "rare", gradient: "gradient-pink-purple", emoji: "🐂", image: "https://cdn.brawlify.com/brawlers/borderless/16000002.png", english: "Bring it on!", russian: "Давай, налетай!" },
  { id: "bull-2", character: "Bull", rarity: "rare", gradient: "gradient-pink-purple", emoji: "🐂", image: "https://cdn.brawlify.com/brawlers/borderless/16000002.png", english: "Out of my way!", russian: "Прочь с дороги!" },
  { id: "brock-1", character: "Brock", rarity: "rare", gradient: "gradient-pink-purple", emoji: "🚀", image: "https://cdn.brawlify.com/brawlers/borderless/16000003.png", english: "Rock and roll, baby!", russian: "Зажжём, детка!" },
  { id: "rico-1", character: "Rico", rarity: "epic", gradient: "gradient-cyan-blue", emoji: "🤖", image: "https://cdn.brawlify.com/brawlers/borderless/16000004.png", english: "Bounce, bounce!", russian: "Прыг-скок!" },
  { id: "spike-1", character: "Spike", rarity: "legendary", gradient: "gradient-gold", emoji: "🌵", image: "https://cdn.brawlify.com/brawlers/borderless/16000005.png", english: "I'm a little prickly!", russian: "Я немного колючий!" },
  { id: "spike-2", character: "Spike", rarity: "legendary", gradient: "gradient-gold", emoji: "🌵", image: "https://cdn.brawlify.com/brawlers/borderless/16000005.png", english: "Bloom and boom!", russian: "Цвети и греми!" },
  { id: "barley-1", character: "Barley", rarity: "rare", gradient: "gradient-gold", emoji: "🍸", image: "https://cdn.brawlify.com/brawlers/borderless/16000006.png", english: "What can I get you?", russian: "Что вам подать?" },
  { id: "jessie-1", character: "Jessie", rarity: "rare", gradient: "gradient-cyan-blue", emoji: "⚡", image: "https://cdn.brawlify.com/brawlers/borderless/16000007.png", english: "Eureka!", russian: "Эврика!" },
  { id: "nita-1", character: "Nita", rarity: "rare", gradient: "gradient-gold", emoji: "🐻", image: "https://cdn.brawlify.com/brawlers/borderless/16000008.png", english: "Bear hug!", russian: "Медвежьи объятия!" },
  { id: "dynamike-1", character: "Dynamike", rarity: "rare", gradient: "gradient-gold", emoji: "💣", image: "https://cdn.brawlify.com/brawlers/borderless/16000009.png", english: "Fire in the hole!", russian: "Ложись!" },
  { id: "el-primo-1", character: "El Primo", rarity: "epic", gradient: "gradient-pink-purple", emoji: "🤼", image: "https://cdn.brawlify.com/brawlers/borderless/16000010.png", english: "I am unstoppable!", russian: "Меня не остановить!" },
  { id: "el-primo-2", character: "El Primo", rarity: "epic", gradient: "gradient-pink-purple", emoji: "🤼", image: "https://cdn.brawlify.com/brawlers/borderless/16000010.png", english: "Feel the fire!", russian: "Почувствуй огонь!" },
  { id: "mortis-1", character: "Mortis", rarity: "mythic", gradient: "gradient-pink-purple", emoji: "🦇", image: "https://cdn.brawlify.com/brawlers/borderless/16000011.png", english: "Behold!", russian: "Узрите!" },
  { id: "mortis-2", character: "Mortis", rarity: "mythic", gradient: "gradient-pink-purple", emoji: "🦇", image: "https://cdn.brawlify.com/brawlers/borderless/16000011.png", english: "Bats are my friends.", russian: "Летучие мыши — мои друзья." },
  { id: "crow-1", character: "Crow", rarity: "legendary", gradient: "gradient-pink-purple", emoji: "🐦‍⬛", image: "https://cdn.brawlify.com/brawlers/borderless/16000012.png", english: "Caw caw, sucker!", russian: "Кар-кар, неудачник!" },
  { id: "crow-2", character: "Crow", rarity: "legendary", gradient: "gradient-pink-purple", emoji: "🐦‍⬛", image: "https://cdn.brawlify.com/brawlers/borderless/16000012.png", english: "Death from above!", russian: "Смерть с небес!" },
  { id: "poco-1", character: "Poco", rarity: "rare", gradient: "gradient-gold", emoji: "🎸", image: "https://cdn.brawlify.com/brawlers/borderless/16000013.png", english: "Let's start the show!", russian: "Начнём шоу!" },
  { id: "bo-1", character: "Bo", rarity: "epic", gradient: "gradient-gold", emoji: "🏹", image: "https://cdn.brawlify.com/brawlers/borderless/16000014.png", english: "Eyes of the eagle!", russian: "Глаза орла!" },
  { id: "piper-1", character: "Piper", rarity: "epic", gradient: "gradient-pink-purple", emoji: "☂️", image: "https://cdn.brawlify.com/brawlers/borderless/16000015.png", english: "Charmed, I'm sure!", russian: "Очарована, уверена!" },
  { id: "pam-1", character: "Pam", rarity: "epic", gradient: "gradient-pink-purple", emoji: "🛡️", image: "https://cdn.brawlify.com/brawlers/borderless/16000016.png", english: "Mama's here!", russian: "Мама здесь!" },
  { id: "tara-1", character: "Tara", rarity: "legendary", gradient: "gradient-pink-purple", emoji: "🔮", image: "https://cdn.brawlify.com/brawlers/borderless/16000017.png", english: "Your fate is sealed!", russian: "Твоя судьба решена!" },
  { id: "darryl-1", character: "Darryl", rarity: "epic", gradient: "gradient-pink-purple", emoji: "🛢️", image: "https://cdn.brawlify.com/brawlers/borderless/16000018.png", english: "Roll out!", russian: "Покатили!" },
  { id: "penny-1", character: "Penny", rarity: "epic", gradient: "gradient-gold", emoji: "🏴‍☠️", image: "https://cdn.brawlify.com/brawlers/borderless/16000019.png", english: "Dead men tell no tales!", russian: "Мёртвые не болтают!" },
  { id: "frank-1", character: "Frank", rarity: "epic", gradient: "gradient-cyan-blue", emoji: "🔨", image: "https://cdn.brawlify.com/brawlers/borderless/16000020.png", english: "Smash time!", russian: "Время крушить!" },
  { id: "gene-1", character: "Gene", rarity: "mythic", gradient: "gradient-pink-purple", emoji: "🧞", image: "https://cdn.brawlify.com/brawlers/borderless/16000021.png", english: "Your wish is my command!", russian: "Твоё желание — мой приказ!" },
  { id: "tick-1", character: "Tick", rarity: "epic", gradient: "gradient-cyan-blue", emoji: "💥", image: "https://cdn.brawlify.com/brawlers/borderless/16000022.png", english: "Tick-tock, boom!", russian: "Тик-так, бум!" },
  { id: "leon-1", character: "Leon", rarity: "legendary", gradient: "gradient-cyan-blue", emoji: "🦎", image: "https://cdn.brawlify.com/brawlers/borderless/16000023.png", english: "You can't see me!", russian: "Ты меня не видишь!" },
  { id: "leon-2", character: "Leon", rarity: "legendary", gradient: "gradient-cyan-blue", emoji: "🦎", image: "https://cdn.brawlify.com/brawlers/borderless/16000023.png", english: "Stay sharp!", russian: "Будь начеку!" },
  { id: "rosa-1", character: "Rosa", rarity: "rare", gradient: "gradient-gold", emoji: "🌹", image: "https://cdn.brawlify.com/brawlers/borderless/16000024.png", english: "Stop and smell the roses!", russian: "Остановись и понюхай розы!" },
  { id: "carl-1", character: "Carl", rarity: "epic", gradient: "gradient-cyan-blue", emoji: "⛏️", image: "https://cdn.brawlify.com/brawlers/borderless/16000025.png", english: "Time to dig in!", russian: "Пора копать!" },
  { id: "bibi-1", character: "Bibi", rarity: "epic", gradient: "gradient-pink-purple", emoji: "🍬", image: "https://cdn.brawlify.com/brawlers/borderless/16000026.png", english: "Batter up!", russian: "К бою!" },
  { id: "8-bit-1", character: "8-Bit", rarity: "epic", gradient: "gradient-pink-purple", emoji: "🕹️", image: "https://cdn.brawlify.com/brawlers/borderless/16000027.png", english: "Game on!", russian: "Игра началась!" },
  { id: "sandy-1", character: "Sandy", rarity: "legendary", gradient: "gradient-gold", emoji: "🏜️", image: "https://cdn.brawlify.com/brawlers/borderless/16000028.png", english: "Sweet dreams!", russian: "Сладких снов!" },
  { id: "bea-1", character: "Bea", rarity: "epic", gradient: "gradient-gold", emoji: "🐝", image: "https://cdn.brawlify.com/brawlers/borderless/16000029.png", english: "Sting like a bee!", russian: "Жаль как пчела!" },
  { id: "emz-1", character: "Emz", rarity: "epic", gradient: "gradient-pink-purple", emoji: "💅", image: "https://cdn.brawlify.com/brawlers/borderless/16000030.png", english: "Like, whatever!", russian: "Да типа пофиг!" },
  { id: "mr-p-1", character: "Mr. P", rarity: "mythic", gradient: "gradient-cyan-blue", emoji: "🐧", image: "https://cdn.brawlify.com/brawlers/borderless/16000031.png", english: "Welcome to my hotel!", russian: "Добро пожаловать в мой отель!" },
  { id: "max-1", character: "Max", rarity: "mythic", gradient: "gradient-pink-purple", emoji: "💨", image: "https://cdn.brawlify.com/brawlers/borderless/16000032.png", english: "Speed it up!", russian: "Ускоряемся!" },
  { id: "jacky-1", character: "Jacky", rarity: "epic", gradient: "gradient-gold", emoji: "👷", image: "https://cdn.brawlify.com/brawlers/borderless/16000033.png", english: "Let's get to work!", russian: "Приступим к работе!" },
  { id: "gale-1", character: "Gale", rarity: "mythic", gradient: "gradient-cyan-blue", emoji: "❄️", image: "https://cdn.brawlify.com/brawlers/borderless/16000034.png", english: "Cool down, will ya?", russian: "Остынь, а?" },
  { id: "nani-1", character: "Nani", rarity: "epic", gradient: "gradient-pink-purple", emoji: "🤖", image: "https://cdn.brawlify.com/brawlers/borderless/16000035.png", english: "Activate!", russian: "Активация!" },
  { id: "sprout-1", character: "Sprout", rarity: "mythic", gradient: "gradient-gold", emoji: "🌱", image: "https://cdn.brawlify.com/brawlers/borderless/16000036.png", english: "Plant power!", russian: "Сила растений!" },
  { id: "surge-1", character: "Surge", rarity: "chromatic", gradient: "gradient-cyan-blue", emoji: "⚡", image: "https://cdn.brawlify.com/brawlers/borderless/16000037.png", english: "Power up!", russian: "Заряжайся!" },
  { id: "colette-1", character: "Colette", rarity: "chromatic", gradient: "gradient-pink-purple", emoji: "💖", image: "https://cdn.brawlify.com/brawlers/borderless/16000038.png", english: "I love you!", russian: "Я тебя люблю!" },
  { id: "amber-1", character: "Amber", rarity: "legendary", gradient: "gradient-gold", emoji: "🔥", image: "https://cdn.brawlify.com/brawlers/borderless/16000039.png", english: "Burn, baby, burn!", russian: "Гори, малыш, гори!" },
  { id: "lou-1", character: "Lou", rarity: "chromatic", gradient: "gradient-cyan-blue", emoji: "🍦", image: "https://cdn.brawlify.com/brawlers/borderless/16000040.png", english: "Stay cool!", russian: "Сохраняй спокойствие!" },
  { id: "byron-1", character: "Byron", rarity: "mythic", gradient: "gradient-pink-purple", emoji: "🧪", image: "https://cdn.brawlify.com/brawlers/borderless/16000041.png", english: "A spoonful of medicine!", russian: "Ложечка лекарства!" },
  { id: "edgar-1", character: "Edgar", rarity: "chromatic", gradient: "gradient-pink-purple", emoji: "😈", image: "https://cdn.brawlify.com/brawlers/borderless/16000042.png", english: "Whatever!", russian: "Да пофиг!" },
  { id: "ruffs-1", character: "Ruffs", rarity: "chromatic", gradient: "gradient-gold", emoji: "🐕", image: "https://cdn.brawlify.com/brawlers/borderless/16000043.png", english: "At ease, soldier!", russian: "Вольно, солдат!" },
  { id: "stu-1", character: "Stu", rarity: "chromatic", gradient: "gradient-pink-purple", emoji: "🏎️", image: "https://cdn.brawlify.com/brawlers/borderless/16000044.png", english: "Vroom vroom!", russian: "Врум-врум!" },
  { id: "belle-1", character: "Belle", rarity: "chromatic", gradient: "gradient-cyan-blue", emoji: "🤠", image: "https://cdn.brawlify.com/brawlers/borderless/16000045.png", english: "Howdy partner!", russian: "Привет, напарник!" },
  { id: "squeak-1", character: "Squeak", rarity: "chromatic", gradient: "gradient-pink-purple", emoji: "🟣", image: "https://cdn.brawlify.com/brawlers/borderless/16000046.png", english: "Squeak squeak!", russian: "Сквик-сквик!" },
  { id: "grom-1", character: "Grom", rarity: "epic", gradient: "gradient-gold", emoji: "💼", image: "https://cdn.brawlify.com/brawlers/borderless/16000047.png", english: "Boom shakalaka!", russian: "Бум-шакалака!" },
  { id: "buzz-1", character: "Buzz", rarity: "legendary", gradient: "gradient-cyan-blue", emoji: "🛟", image: "https://cdn.brawlify.com/brawlers/borderless/16000048.png", english: "Watch the water!", russian: "Следи за водой!" },
  { id: "griff-1", character: "Griff", rarity: "mythic", gradient: "gradient-gold", emoji: "💰", image: "https://cdn.brawlify.com/brawlers/borderless/16000049.png", english: "Money money money!", russian: "Деньги, деньги, деньги!" },
  { id: "ash-1", character: "Ash", rarity: "epic", gradient: "gradient-pink-purple", emoji: "🗑️", image: "https://cdn.brawlify.com/brawlers/borderless/16000050.png", english: "Trash everywhere!", russian: "Мусор повсюду!" },
  { id: "meg-1", character: "Meg", rarity: "legendary", gradient: "gradient-cyan-blue", emoji: "🤖", image: "https://cdn.brawlify.com/brawlers/borderless/16000051.png", english: "Tech up!", russian: "Прокачай технику!" },
  { id: "lola-1", character: "Lola", rarity: "epic", gradient: "gradient-pink-purple", emoji: "🎭", image: "https://cdn.brawlify.com/brawlers/borderless/16000052.png", english: "I am a star!", russian: "Я звезда!" },
  { id: "fang-1", character: "Fang", rarity: "chromatic", gradient: "gradient-gold", emoji: "🐼", image: "https://cdn.brawlify.com/brawlers/borderless/16000053.png", english: "Hi-ya!", russian: "Хай-я!" },
  { id: "eve-1", character: "Eve", rarity: "legendary", gradient: "gradient-cyan-blue", emoji: "🥚", image: "https://cdn.brawlify.com/brawlers/borderless/16000054.png", english: "My babies!", russian: "Мои детки!" },
  { id: "janet-1", character: "Janet", rarity: "legendary", gradient: "gradient-cyan-blue", emoji: "🎤", image: "https://cdn.brawlify.com/brawlers/borderless/16000055.png", english: "Take the stage!", russian: "Выходи на сцену!" },
  { id: "bonnie-1", character: "Bonnie", rarity: "legendary", gradient: "gradient-pink-purple", emoji: "🎀", image: "https://cdn.brawlify.com/brawlers/borderless/16000056.png", english: "Boom! Cannonball!", russian: "Бум! Ядро!" },
  { id: "otis-1", character: "Otis", rarity: "chromatic", gradient: "gradient-cyan-blue", emoji: "🐙", image: "https://cdn.brawlify.com/brawlers/borderless/16000057.png", english: "Ink it up!", russian: "Заливай чернилами!" },
  { id: "sam-1", character: "Sam", rarity: "chromatic", gradient: "gradient-gold", emoji: "🥊", image: "https://cdn.brawlify.com/brawlers/borderless/16000058.png", english: "Knuckle up!", russian: "Поднимай кулаки!" },
  { id: "gus-1", character: "Gus", rarity: "mythic", gradient: "gradient-cyan-blue", emoji: "👻", image: "https://cdn.brawlify.com/brawlers/borderless/16000059.png", english: "Boo!", russian: "Бу!" },
  { id: "buster-1", character: "Buster", rarity: "mythic", gradient: "gradient-pink-purple", emoji: "🎬", image: "https://cdn.brawlify.com/brawlers/borderless/16000060.png", english: "Action!", russian: "Мотор!" },
  { id: "chester-1", character: "Chester", rarity: "chromatic", gradient: "gradient-pink-purple", emoji: "🎪", image: "https://cdn.brawlify.com/brawlers/borderless/16000061.png", english: "Surprise!", russian: "Сюрприз!" },
  { id: "gray-1", character: "Gray", rarity: "legendary", gradient: "gradient-cyan-blue", emoji: "🎩", image: "https://cdn.brawlify.com/brawlers/borderless/16000062.png", english: "Splendid!", russian: "Великолепно!" },
  { id: "mandy-1", character: "Mandy", rarity: "mythic", gradient: "gradient-gold", emoji: "🍭", image: "https://cdn.brawlify.com/brawlers/borderless/16000063.png", english: "Sweet shot!", russian: "Сладкий выстрел!" },
  { id: "r-t-1", character: "R-T", rarity: "epic", gradient: "gradient-cyan-blue", emoji: "📺", image: "https://cdn.brawlify.com/brawlers/borderless/16000064.png", english: "Recording!", russian: "Запись!" },
  { id: "willow-1", character: "Willow", rarity: "legendary", gradient: "gradient-cyan-blue", emoji: "🧜", image: "https://cdn.brawlify.com/brawlers/borderless/16000065.png", english: "Mind control!", russian: "Контроль разума!" },
  { id: "maisie-1", character: "Maisie", rarity: "epic", gradient: "gradient-pink-purple", emoji: "🚀", image: "https://cdn.brawlify.com/brawlers/borderless/16000066.png", english: "Launch ready!", russian: "Готов к запуску!" },
  { id: "hank-1", character: "Hank", rarity: "epic", gradient: "gradient-cyan-blue", emoji: "🎈", image: "https://cdn.brawlify.com/brawlers/borderless/16000067.png", english: "Inflate!", russian: "Надувай!" },
  { id: "pearl-1", character: "Pearl", rarity: "epic", gradient: "gradient-gold", emoji: "🍪", image: "https://cdn.brawlify.com/brawlers/borderless/16000068.png", english: "Fresh outta the oven!", russian: "Прямо из печи!" },
  { id: "larry-and-lawrie-1", character: "Larry & Lawrie", rarity: "epic", gradient: "gradient-pink-purple", emoji: "👮", image: "https://cdn.brawlify.com/brawlers/borderless/16000069.png", english: "Police business!", russian: "Полицейское дело!" },
  { id: "angelo-1", character: "Angelo", rarity: "mythic", gradient: "gradient-cyan-blue", emoji: "🏹", image: "https://cdn.brawlify.com/brawlers/borderless/16000070.png", english: "Bullseye!", russian: "В яблочко!" },
  { id: "berry-1", character: "Berry", rarity: "epic", gradient: "gradient-pink-purple", emoji: "🍓", image: "https://cdn.brawlify.com/brawlers/borderless/16000071.png", english: "Scoop it up!", russian: "Зачерпни!" },
  { id: "shade-1", character: "Shade", rarity: "mythic", gradient: "gradient-pink-purple", emoji: "👤", image: "https://cdn.brawlify.com/brawlers/borderless/16000072.png", english: "Boo!", russian: "Бу!" },
  { id: "mico-1", character: "Mico", rarity: "mythic", gradient: "gradient-gold", emoji: "🐒", image: "https://cdn.brawlify.com/brawlers/borderless/16000073.png", english: "Monkey business!", russian: "Обезьяньи дела!" },
  { id: "melodie-1", character: "Melodie", rarity: "legendary", gradient: "gradient-pink-purple", emoji: "🎵", image: "https://cdn.brawlify.com/brawlers/borderless/16000074.png", english: "Sing along!", russian: "Пой со мной!" },
  { id: "lily-1", character: "Lily", rarity: "legendary", gradient: "gradient-pink-purple", emoji: "🌸", image: "https://cdn.brawlify.com/brawlers/borderless/16000075.png", english: "Now you see me!", russian: "Теперь видишь!" },
  { id: "clancy-1", character: "Clancy", rarity: "chromatic", gradient: "gradient-cyan-blue", emoji: "🪖", image: "https://cdn.brawlify.com/brawlers/borderless/16000076.png", english: "Reporting for duty!", russian: "Прибыл на службу!" },
  { id: "moe-1", character: "Moe", rarity: "legendary", gradient: "gradient-gold", emoji: "🐀", image: "https://cdn.brawlify.com/brawlers/borderless/16000077.png", english: "Dig deeper!", russian: "Копай глубже!" },
  { id: "kit-1", character: "Kit", rarity: "legendary", gradient: "gradient-pink-purple", emoji: "🐱", image: "https://cdn.brawlify.com/brawlers/borderless/16000078.png", english: "Purrfect!", russian: "Мур-сечно!" },
  { id: "draco-1", character: "Draco", rarity: "legendary", gradient: "gradient-pink-purple", emoji: "🐉", image: "https://cdn.brawlify.com/brawlers/borderless/16000079.png", english: "Rawr!", russian: "Рррр!" },
  { id: "juju-1", character: "Juju", rarity: "mythic", gradient: "gradient-gold", emoji: "🃏", image: "https://cdn.brawlify.com/brawlers/borderless/16000080.png", english: "Cards on the table!", russian: "Карты на стол!" },
];

export const CHARACTERS = Array.from(
  new Map(VOICE_LINES.map((v) => [v.character, { name: v.character, emoji: v.emoji, image: v.image, rarity: v.rarity, gradient: v.gradient }])).values()
);
