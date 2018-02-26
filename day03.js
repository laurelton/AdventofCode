let squaresSpiral;
const targetNumber = 10;
const sqRt = Math.sqrt(targetNumber);
let isPerfectSquare = Number.isInteger(sqRt) ;
let square = 1;
if (!Number.isInteger(sqRt)) {
    square = Number.parseInt(sqRt) + 1;
    square *= square;
}

function getSquares(square) {
    let squares = [];
    let int = 1; 
    while (int * int <= square) {
        squares.push(int * int);
        int += 1;
    }
    return squares;
}

let steps = getSquares(square);

function buildSpiral(number) {
    let spiral = [];
    
}

squaresSpiral = buildSpiral(square);
