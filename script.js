const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const frasesFelipe = [
    "Number 1 is like a unicorn riding a rainbow 🦄🌈. By Felipe",
    "Number 2 is secretly a wizard, just ask the moon 🌝✨. By Felipe",
    "Number 3 is the number of pizza 🍕+ rollercoasters 🎢. By Felipe",
    "Number 4 is a ninja wearing socks 🧦🥷. By Felipe",
    "Number 5 is for high-fiving dolphins 🐬✋. By Felipe",
    "Number 6 is a dancing taco 🌮💃. By Felipe",
    "Number 7 is the secret sauce of happiness 🍯🥳. By Felipe",
    "Number 8 has infinite power like an octopus 🐙⚡. By Felipe",
    "Number 9 loves singing opera while jumping on trampolines 🎭🤸‍♀️. By Felipe",
    "Number 10 is a cake with no calories 🍰🎉. By Felipe",
    "Number 11 is an umbrella that can float ☔🛸. By Felipe",
    "Number 12 is a penguin on a skateboard 🛹🐧. By Felipe",
    "Number 13 is lucky, because it knows how to juggle 🍀🤹. By Felipe",
    "Number 14 is a rollerblading llama 🦙⛸️. By Felipe",
    "Number 15 is a popcorn party with no popcorn 🍿🎉. By Felipe",
    "Number 16 is a trampoline that bounces you into space 🌌🚀. By Felipe",
    "Number 17 is like a jellybean that can teleport 🍬🌀. By Felipe",
    "Number 18 is a disco ball in a swimming pool 🏊‍♀️💃. By Felipe",
    "Number 19 is a cactus that gives hugs 🌵🤗. By Felipe",
    "Number 20 is the final boss in a video game 🎮👾. By Felipe"
    "Number 20 is o dia que comemoro aniversário de namoro com a nika <3. By Felipe"
];

const frasesNika = [
    "Число 1 как единорог на радуге 🦄🌈. By Nika",
    "Число 2 — это волшебник, спроси у луны 🌝✨. By Nika",
    "Число 3 — это пицца 🍕+ американские горки 🎢. By Nika",
    "Число 4 — это ниндзя в носках 🧦🥷. By Nika",
    "Число 5 — это дающий пятюню дельфин 🐬✋. By Nika",
    "Число 6 — это танцующий такос 🌮💃. By Nika",
    "Число 7 — это секретный соус счастья 🍯🥳. By Nika",
    "Число 8 — это безграничная сила осьминога 🐙⚡. By Nika",
    "Число 9 — это опера, которую поет на батуте 🎭🤸‍♀️. By Nika",
    "Число 10 — это торт без калорий 🍰🎉. By Nika",
    "Число 11 — это зонт, который может летать ☔🛸. By Nika",
    "Число 12 — это пингвин на скейтборде 🛹🐧. By Nika",
    "Число 13 — это удача, потому что оно жонглирует 🍀🤹. By Nika",
    "Число 14 — это катящийся ламантина 🦙⛸️. By Nika",
    "Число 15 — это вечеринка с попкорном, но без попкорна 🍿🎉. By Nika",
    "Число 16 — это батут, который подбрасывает тебя в космос 🌌🚀. By Nika",
    "Число 17 — это леденец, который может телепортироваться 🍬🌀. By Nika",
    "Число 18 — это диско-шар в бассейне 🏊‍♀️💃. By Nika",
    "Число 19 — это кактус, который обнимает 🌵🤗. By Nika",
    "Число 20 — это босс в видеоигре 🎮👾. By Nika"
];

let currentNumber = 0;

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function updateContent() {
    currentNumber = (currentNumber + 1) % numeros.length; // Ciclando os números de 1 a 20
    document.getElementById("numero").textContent = numeros[currentNumber];
    
    // Frase aleatória (em inglês ou russo)
    if (Math.random() < 0.5) {
        document.getElementById("review").textContent = getRandomElement(frasesFelipe);
    } else {
        document.getElementById("review").textContent = getRandomElement(frasesNika);
    }
}

document.getElementById("nextBtn").addEventListener("click", updateContent);

// Iniciar com o primeiro número
updateContent();
