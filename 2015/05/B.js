'use strict';

let common = require('./common.js');

let words = common.inputStrings();
console.log(words.length);
let niceList = [];

let count = 0;

for (let i = 0; i < words.length; i++) {
    if (common.containsSpacedRepeat(words[i]) && common.containsRepeatedPairs(words[i])) {
        niceList.push(words[i]);
    }
}

console.log(niceList.length);
