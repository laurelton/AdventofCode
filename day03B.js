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