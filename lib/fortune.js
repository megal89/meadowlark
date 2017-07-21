let fortunes = [
    "Победи свои страхи, или они победят тебя.",
    "Рекам нужны истоки.",
    "Небойся неведомго.",
    "Тебя ждет приятный сюрприз.",
    "Будь проще везде, где только можною"
];

exports.getFortune = function () {
    let idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};