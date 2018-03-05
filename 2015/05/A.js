'use strict';

let common = require('./common.js');

let words = common.inputStrings();
let niceList = [];
words = ['abcdefghi', 'aee', 'aeidd'];

for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toLocaleLowerCase();
    if (common.hasThreeVowels(words[i]) && common.containsRepeatedCharcters(words[i])) { // && !common.containsForbiddenStrings(words[i])) {
        niceList.push(words[i]);
    }
}

console.log(niceList.length);