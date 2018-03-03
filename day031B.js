'use strict';

let numbers = [1, 12, 23, 1024, 312051];

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    taxiPath(vector) {
        return Math.abs(this.x - vector.x) + Math.abs(this.y - vector.y);
    }

    equals(vector) {
        return this.x == vector.x && this.y == vector.y;
    }
}

let right = new Vector(1, 0);
let up    = new Vector(0, 1);
let left  = new Vector(-1, 0);
let down  = new Vector(0, -1);

let directions = [right, up, left, down];
let currentDirection = 0;
let origin = new Vector(0, 0);
let filledCoordinates = [];
filledCoordinates.push(origin);

let spiral = {
    1: origin
};

function changeDirection(currentValue) {
    currentDirection = (currentDirection + 1) % 4;
}

function turnLeft() {    
    currentDirection = (currentDirection + 1) % 4;
}

numbers.forEach(number => {
    let upNeighbor, leftNeighbor, downNeighbor, rightNeighbor, neighborExists;
    for (let i = 1; i <= number; i++) {
        if (i in spiral) {
            continue;
        } else {
            spiral[i] = spiral[i - 1].add(directions[currentDirection]);
            filledCoordinates.push(spiral[i]);
                        
            switch (directions[currentDirection]) {
                case right:
                    upNeighbor = spiral[i].add(up);
                    neighborExists = filledCoordinates.find(elem => {
                        return elem.equals(upNeighbor);
                    });
                    if (neighborExists == null) {
                        changeDirection(i);
                    }
                    break;
                case up:
                    leftNeighbor = spiral[i].add(left);
                    neighborExists = filledCoordinates.find(elem => {
                        return elem.equals(leftNeighbor);
                    });
                    if (neighborExists == null) {
                        changeDirection(i);
                    }
                    break;
                case left:
                    downNeighbor = spiral[i].add(down);
                    neighborExists = filledCoordinates.find(elem => {
                        return elem.equals(downNeighbor);
                    });
                    if (neighborExists == null) {
                        changeDirection(i);
                    }
                    break;
                case down:
                    rightNeighbor = spiral[i].add(right);
                    neighborExists = filledCoordinates.find(elem => {
                        return elem.equals(rightNeighbor);
                    });
                    if (neighborExists == null) {
                        changeDirection(i);
                    }
                    break;
            }
        }
    }

    console.log(`Number = ${number}      Steps = ${spiral[number].taxiPath(origin)}`);
});