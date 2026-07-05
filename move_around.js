const mcData = require('minecraft-data')(bot.version);

function moveRandomly() {
    const movements = ['forward', 'back', 'left', 'right'];

    const movement = movements[Math.floor(Math.random() * movements.length)];

    bot.setControlState(movement, true);

    setTimeout(() => {
        bot.setControlState(movement, false);

        if (Math.random() > 0.5) {
            bot.setControlState('jump', true);
            setTimeout(() => {
                bot.setControlState('jump', false);
            }, 500);
        }
    }, 2000);
}

// Repeat every 10 seconds
setInterval(moveRandomly, 10000);
