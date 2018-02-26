let numbers = [1, 2, 9, 12, 16, 23, 25, 27, 41, 1024, 312051];

function getBoundingSquares(number) {
    let squares = [];
    if (number < 1 || !Number.isInteger(number)) {
        throw Error('Number must be an integer greater than > 1');
    }

    let i = 0;
    do {
        i += 1;
        squares.push(i * i);
        if (squares.length > 2) {
            squares.shift();
        }
    } while (i * i < number);

    return squares;
}

function getMinMaxSteps(squares) {
    let minSteps, maxSteps;

    // TODO - error checking on squares: Is it an array, with length equal to 1 or 2, with values in ascending order
    if (squares.length == 1) {
        return [0];
    } else {
        let minSq = Math.sqrt(squares[0]);
        let maxSq = Math.sqrt(squares[1]);
        
        if (minSq % 2 == 0) {
            maxSteps = minSq;
            minSteps = minSq / 2;
        } else {
            minSteps = maxSq / 2;
            maxSteps = maxSq;
        }
    }

    return [minSteps, maxSteps];
}

numbers.forEach((number) => {
    // TODO - Implement base case - e.g. 1 = 0 steps
    // console.log('For the number ' + number + ' the squares are ' + getBoundingSquares(number));
    let [min, max] = getBoundingSquares(number);
    let minSq = Math.sqrt(min);
    let maxSq = Math.sqrt(max);
    let minSteps, maxSteps;

    if (minSq % 2 == 0) {
        maxSteps = minSq;
        minSteps = minSq / 2;
    } else {
        minSteps = maxSq / 2;
        maxSteps = maxSq;
    }

    console.log(`The number of steps is between ${minSteps} and ${maxSteps} for the number ${number}`);
});

for (let i = 1; i < 26; i++) {
    let steps = getMinMaxSteps(getBoundingSquares(i));

    console.log(`For ${i} there are between ${steps[0]} and ${steps[1]} steps.`);
}