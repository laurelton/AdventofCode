let fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');

let count = 0; 
let characters = input.split('');

for (let i = 0; i < characters.length; i++) {
    if (characters[i] == '(') {
        count += 1;
        continue;
    }
    if (characters[i] == ')') {
        count -= 1;
    }
}

console.log(`The floor is ${count}`);