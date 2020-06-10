const readline = require('readline');
const fs = require('fs');
const DiepSocket = require('diepsocket');

const rl = readline.createInterface({
    input: fs.createReadStream('socks.txt'),
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
function doStuff() {
    const bot = new DiepSocket('diep.io/#264387070079ED607F42', line); 
    bot.on('accept', () => console.log('Succesfully connected!'))
    bot.on('error', (err) => console.log(err));
}
setInterval(doStuff, 200);
})







