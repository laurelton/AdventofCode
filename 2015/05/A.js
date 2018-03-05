'use strict';

let common = require('./common.js');

let words = common.inputStrings();
console.log();
let niceList = [];
words = ['abcdefghi', 'aeepq', 'aeddd', 'aaaxybb'];

for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toLocaleLowerCase();
    if (common.hasThreeVowels(words[i]) && common.containsRepeatedCharcters(words[i]) && !common.containsForbiddenStrings(words[i])) {
        niceList.push(words[i]);
    }
}

console.log(niceList.length);