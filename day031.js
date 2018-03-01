let numbers = [-1, 0, 3.14, 1, 12, 23, 1024, 312051];

function getBoundingSquares(number) {
    let squares = [];
    if (number < 1 || !Number.isInteger(number)) {
        throw Error('Number must be an integer greater than 0');
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

function getStep(number) {
    let step = 0;
    let allSteps = {};
    let addend = -1;

    if (number == 1) {
        return step;
    }

    let squares = getBoundingSquares(number);
    let roots = squares.map(number => Math.sqrt(number));
    let length = roots.reduce((total, number) => total += number);
    let max = roots.filter(number => number % 2 == 0)[0];
    let min = max / 2;
    let startMax = roots[0] % 2 == 0;
    let stepValue = startMax ? max : max - 1;
    let numberKey = squares[0] + 1;

    for (let i = 0; i < length; i++) {
        allSteps[numberKey] = stepValue;

        if (numberKey == number) {
            break;
        }
        numberKey += 1;

        if (stepValue == min) {
            addend *= -1;
        }
        stepValue += addend;
        if (stepValue > max) {
            stepValue -= 1;
            addend *= -1;
            stepValue += addend;
        }
    }

    return allSteps[numberKey];
}

numbers.forEach((number) => {
    try {
        let answer = getStep(number);
        console.log(`The number of steps from ${number} to 1 is ${answer}.`);
    } catch (error) {
        console.log(`${number} is invalid input. ${error.message}`);
    }
});