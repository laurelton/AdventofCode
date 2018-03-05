let fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8');


let lines  = input.split('\r\n');
let dimensions = [];
let total = 0;

for (let i = 0; i< lines.length; i++) {
    let strArray = lines[i].split('x');
    dimensions[i] = strArray.map(elem => {
        return Number.parseInt(elem);
    });
    dimensions[i].sort((first, second) => {
        return first - second;
    });

    let wrap = dimensions[i][0] + dimensions[i][0] + dimensions[i][1] + dimensions[i][1];
    let bow = dimensions[i].reduce((total, number) => {
        return total *= number;
    }, 1);

    total += wrap + bow;
}
console.log(total);