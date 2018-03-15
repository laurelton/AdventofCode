'use strict';

let enumeration = require('enumify');

let fs = require('fs');
// let input = fs.readFileSync('./input.txt', 'utf-8');
let input = fs.readFileSync('./2015/06/input.txt', 'utf-8');

let lines = input.split('\r\n');
let off, on, toggle;
let offRegEx = new RegExp(/off/);
let onRegEx = new RegExp(/on/);
let togRegEx = new RegExp(/toggle/);
let myCommand;

let lights = (function() {
    let arr = [];

    for (let r = 0; r < 1000; r++) {
        arr.push([]);
        for (let c = 0; c < 1000; c++) {
            arr[r][c] = false;
        }
    }

    return arr;
})();

console.log(lights.length);

class Commands extends enumeration.Enum {}
Commands.initEnum(['ON', 'OFF', 'TOGGLE']);

lines.forEach(line => {
    let coords;
    if (line.match(offRegEx)) {
        myCommand = Commands.OFF;
        let words = line.split(' ');
        coords = setCoords([words[2], words[4]]);
    }
    if (line.match(onRegEx)) {
        myCommand = Commands.ON;
        let words = line.split(' ');
        coords = setCoords([words[2], words[4]]);
    }
    if (line.match(togRegEx)) {
        myCommand = Commands.TOGGLE;
        let words = line.split(' ');
        coords = setCoords([words[1], words[3]]);
    }

    executeCommands(myCommand, coords);
});

function setCoords(words) {
    let [startX, startY] = words[0].split(',');
    let [endX, endY] = words[words.length - 1].split(',');
    startX = parseInt(startX);
    startY = parseInt(startY);
    endX = parseInt(endX);
    endY = parseInt(endY);

    return [startX, startY, endX, endY];
}

function executeCommands(command, coords) {}

function createMatrix(count) {
    let arr = [];
    let val = 1;
    for (let r = 0; r < count; r++) {
        arr.push([]);
        for (let c = 0; c < count; c++) {
            arr[r][c] = val++;
        }
    }

    return arr;
}

function transpose(array) {
    for (let r = 0; r < array.length; r++) {
        for (let c = r + 1; c < array[r].length; c++) {
            [array[r][c], array[c][r]] = [array[c][r], array[r][c]];
        }
    }
    return array;
}
