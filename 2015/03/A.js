let fs = require('fs');
// let input = fs.readFileSync('./2015/03/input.txt', 'utf-8');
let input = fs.readFileSync('./input.txt', 'utf-8');

let points = new Set();
let x = y = 0;

function addPoints() {
    points.add(JSON.stringify([x, y]));
}

addPoints([x,y]);
let directions = input.split('');

for (let i = 0; i < directions.length; i++) {
    switch (directions[i]) {
        case '<':
            x -= 1;
            addPoints();
            break;
        case '>':
            x += 1;
            addPoints();
            break;
        case '^':
            y += 1;
            addPoints();
            break;
        case 'v':
            y -= 1;
            addPoints();
            break;
    }
}

// points.forEach(point => {
//     console.log(point);
// });

console.log(points.size);