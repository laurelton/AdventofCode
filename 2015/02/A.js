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
    let scrap = dimensions[i][0] * dimensions[i][1];
    let surfaceArea = 2 * (dimensions[i][0] * dimensions[i][1] + dimensions[i][0] * dimensions[i][2] + dimensions[i][2] * dimensions[i][1])
    total += surfaceArea + scrap;
    // dimensions.push(lines[i].split('x'));
    // dimensions[i].sort();
    console.log(dimensions[i]);
    console.log(`Area = ${surfaceArea}     Scrap = ${scrap}`);

}

console.log(total)