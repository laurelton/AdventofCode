let fs = require('fs');
let text = fs.readFileSync('./day02input.txt').toString('utf-8');
// console.log(typeof text);
// let text = fs.readFileSync('./sample2.txt').toString('utf-8');


let lines = text.split('\r\n');

// lines.forEach(line => console.log('The value of the line is ${line}.')

function checksum(lines) {
    let sum = 0;
    for (let i = 0; i < lines.length; i++) {
        let numbers = lines[i].split('\t');
        let min, max;
        for (let j = 0; j < numbers.length; j++) {
            numbers[j] = Number.parseInt(numbers[j]);
            if (min === undefined) {
                min = numbers[j];
            }

            if (max == undefined) {
                max = numbers[j];
            }

            if (numbers[j] < min) {
                min = numbers[j];
            }

            if (numbers[j] > max) {
                max = numbers[j];
            }
        }
        sum += (max - min);
    }

    return sum;
}

// let sample = [[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]];
// let sample = ['5\t1\t9\t5', '7\t5\t3', '2\t4\t6\t8'];

// console.log(checksum(sample));
// console.log(checksum(lines));

function partTwo(lines) {
    let sum = 0;
    
    for (let i = 0; i < lines.length; i++) {
        let numbers = lines[i].split('\t');
        for (let j = 0; j < numbers.length; j++) {
            
            let rest = numbers.slice(j + 1);
            let getRemainder = function(n) {
                let dividend = Math.max(numbers[j], n);
                let divisor = Math.min(numbers[j], n);

                return dividend % divisor;
            }

            let getQuotient = function(n) {
                let dividend = Math.max(numbers[j], n);
                let divisor = Math.min(numbers[j], n);

                return dividend / divisor;
            }

            let divisible = rest.filter(elem => getRemainder(elem) == 0);

            if (divisible.length == 1) {
                sum += getQuotient(divisible[0]);
                break;
            }


            // for (let k = j + 1; k < numbers.length; k++) {
            //     let dividend, divisor, remainder;
            //     [dividend, divisor] = numbers[j] > numbers[k] ? [numbers[j], numbers[k]] : [numbers[k], numbers[j]];
            //     if (dividend % divisor == 0) {
            //         sum += dividend / divisor;
            //         break;
            //     }
            // }
        }
    }

    return sum;
}

console.log(partTwo(lines));
