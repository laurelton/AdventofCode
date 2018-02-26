let numbers = [-1, 0, 1, 3.14, 2, 9, 12, 16, 23, 25, 27, 48, 49, 50, 1024, 312051];

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

    if (!Array.isArray(squares)) {
        throw new Error('Value passed to getMinMaxSteps MUST be an array!');
    }

    if (squares.length < 1 || squares.length > 2) {
        throw new Error('Array passed to getMinMaxSteps MUST contain 1 or 2 values');
    }

    if (squares.length == 1) {
        return [0, 0];
    } else {
        squares = squares.map(num => Math.sqrt(num));
        let [minSq, maxSq] = squares.sort((lesser, greater) => lesser - greater);

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

function getSteps(minMax, number) {
    let steps; 

    if (!Array.isArray(minMax)) {
        throw new Error('Value passed to getSteps MUST be an array!');
    }

    if (minMax.length != 2) {
        throw new Error('Array passed to getSteps MUST contain 2 values');
    }
}

numbers.forEach((number) => {
    try {
        let steps = getMinMaxSteps(getBoundingSquares(number));
        console.log(`For ${number} there are between ${steps[0]} and ${steps[1]} steps.`);
    } catch (error) {
        console.log(`${number} is not a valid input`);
    }
});