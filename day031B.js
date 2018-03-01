'use strict';

let numbers = [1, 2, 3, 4, 12, 23, 1024, 312051];

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    // subtract(vector) {
    //     this.x -= vector.x;
    //     this.y -= vector.y;
    // }

    taxiPath(vector) {
        return (this.x - vector.x) + (this.y - vector.y);
    }
}

let right = new Vector( 1,  0);
let up    = new Vector( 0,  1);
let left  = new Vector(-1,  0);
let down  = new Vector( 0, -1);

let directions = [right, up, left, down];
let currentDirection = 0;
let origin = new Vector(0,0);

let spiral = {
    1: origin
};

numbers.forEach(number => {
    for(let i = 1; i <= number; i++) {
        if (i in spiral) {
            // console.log(`Number = ${i} Steps = ${spiral[i].taxiPath(origin)}`);
            continue;
        } else {
            spiral[i] = spiral[i-1].add(directions[currentDirection]);
            let next = i + 1;
            if (!(next in spiral)) {
                currentDirection = (currentDirection + 1) % 4;
            }
        }
    }
    
    console.log(`Number = ${number}      Steps = ${spiral[number].taxiPath(origin)}`);
});