'use strict';

let common = require('./common.js');

let words = common.inputStrings();
console.log(words.length);
let niceList = [];
// words = ['abcdefghi', 'aeepq', 'aeiddd', 'aaabb'];

let count = 0;
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toLocaleLowerCase();
    if (common.hasThreeVowels(words[i]) && common.containsRepeatedCharacters(words[i]) && !common.containsForbiddenStrings(words[i])) {
        count += 1;
        niceList.push(words[i]);
        // console.log(`Number: ${count} Line ${i + 1}:   ${words[i]}`);
        // // let highlighted = common.highlightVowels(words[i]);
        // console.log(common.highlightVowels(words[i]));
        // // highlighted = common.highlightRepeatedCharacters(words[i]);
        // // highlighted = common.highlightRepeatedCharacters(highlighted);
        // console.log(common.highlightRepeatedCharacters(words[i]));
        // console.log(common.highlightForbiddenStrings(words[i]));
        // // console.log(highlighted);
    }
}

console.log(niceList.length);
console.log(count);