let fs = require('fs');
// let input = fs.readFileSync('./2015/03/input.txt', 'utf-8');
let input = fs.readFileSync('./input.txt', 'utf-8');

let homes = new Set();
let santaX = santaY = robotX = robotY = 0;

function addPoints() {
    homes.add(JSON.stringify([santaX, santaY]));
}

addPoints([santaX, santaY]);
let directions = input.split('');

for (let i = 0; i < directions.length; i++) {
    if (i % 2 == 0) {
        switch (directions[i]) {
            case '>':
                santaX += 1;
                homes.add(JSON.stringify([santaX, santaY]));
                break;
            case '<':
                santaX -= 1;
                homes.add(JSON.stringify([santaX, santaY]));
                break;
            case '^':
                santaY += 1;
                homes.add(JSON.stringify([santaX, santaY]));
                break;
            case 'v':
                santaY -= 1;
                homes.add(JSON.stringify([santaX, santaY]));
                break;
        }
    } else {
        switch (directions[i]) {
            case '>':
                robotX += 1;
                homes.add(JSON.stringify([robotX, robotY]));
                break;
            case '<':
                robotX -= 1;
                homes.add(JSON.stringify([robotX, robotY]));
                break;
            case '^':
                robotY += 1;
                homes.add(JSON.stringify([robotX, robotY]));
                break;
            case 'v':
                robotY -= 1;
                homes.add(JSON.stringify([robotX, robotY]));
                break;
        }
    }
}

console.log(homes.size);
