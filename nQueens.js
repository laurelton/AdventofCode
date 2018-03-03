// JavaScript
// ES5
// Algorithm uses recursive Backtracking. Checks for correct position on subfields, whichs saves a lot position checks. Needs 15.720 position checks for a 8x8 field.

function queenPuzzle(rows, columns) {
    if (rows <= 0) {
        return [[]];
    } else {
        return addQueen(rows - 1, columns);
    }
}
 
function addQueen(newRow, columns, prevSolution) {
    var newSolutions = [];
    var prev = queenPuzzle(newRow, columns);
    for (var i = 0; i < prev.length; i++) {
        var solution = prev[i];
        for (var newColumn = 0; newColumn < columns; newColumn++) {
            if (!hasConflict(newRow, newColumn, solution))
                newSolutions.push(solution.concat([newColumn]))
        }
    }
    return newSolutions;
}
 
function hasConflict(newRow, newColumn, solution) {
    for (var i = 0; i < newRow; i++) {
        if (solution[i]     == newColumn          ||
            solution[i] + i == newColumn + newRow || 
            solution[i] - i == newColumn - newRow) {
                return true;
        }
    }
    return false;
}

let boards = queenPuzzle(4,4);
console.log(boards);

for (let i = 0; i < boards.length; i++) {
    console.log(boards[i]);
    for (let j = 0; j < boards[i].length; j++) {
        let queen = boards[i][j];
        let line = '';
        for (let k = 0; k < boards[i].length; k++) {
            if (k == queen) {
                line += '♛|';
            } else {
                line += '  󠀠󠀠󠀠|';
            }
        }
        console.log(line);
    }
}