'use strict';

let fs = require('fs');
// let input = fs.readFileSync('./2015/05/input.txt', 'utf-8');
let input = fs.readFileSync('./input.txt', 'utf-8');
// let potentialNiceStrings = input.split('\r\n');
let color = require('colors');

module.exports = {
    hasThreeVowels: function (word) {
        let letters = word.split('');
        let vowelCount = 0;

        for (let i = 0; i < letters.length; i++) {
            if (this.vowels.indexOf(letters[i]) > -1) {
                vowelCount += 1;
            }

            if (vowelCount == 3) {
                return true;
            }
        }

        return false;
    },

    highlightVowels: function (word) {
        let str = '';
        let letters = word.split('');
        let count = 0;

        for (let i = 0; i < letters.length; i++) {
            if (this.vowels.includes(letters[i])) {
                count += 1;
                str += letters[i].yellow;
            } else {
                str += letters[i];
            }
        }

        return `${str} Vowel Count: ${count}`;
    },

    containsRepeatedCharacters: function (word) {
        let repeatCharacters = false;
        let letters = word.split('');

        for (let i = 0; i < letters.length - 1; i++) {
            if (letters[i] == letters[i + 1]) {
                repeatCharacters = true;
                break;
            }
        }

        return repeatCharacters;
    },

    highlightRepeatedCharacters: function (word) {
        let str = '';
        let letters = word.split('');

        for (let i = 0; i < letters.length; i++) {
            if (letters[i] == letters[i + 1] || letters[i] == letters[i - 1]) {
                str += letters[i].cyan;
            } else {
                str += letters[i];
            }
        }

        return str;
    },

    containsForbiddenStrings: function (word) {
        // TODO: Change this function to use regular expressions
        for (let i = 0; i < this.excludedSubstrings.length; i++) {
            let str = this.excludedSubstrings[i];
            if (word.indexOf(str) >= 0) {
                return true;
            }
        }

        return false;
    },

    highlightForbiddenStrings: function (word) {
        let str = '';
        for (let i = 0; i < this.excludedSubstrings.length; i++) {
            if (word.indexOf(this.excludedSubstrings[i]) >= 0) {
                let index = word.indexOf(this.excludedSubstrings[i]);
                let letters = word.split('');
                for (let j = 0; j < letters.length; j++) {
                    if (j == index || j == index + 1) {
                        str += letters[j].red;
                    } else {
                        str += letters[j];
                    }
                }
            }
        }

        return str;
    },

    containsRepeatedPairs: function (word) {
        return undefined;
    },

    containsSpacedRepeat: function (word) {
        return undefined;
    },

    excludedSubstrings: ['ab', 'cd', 'pq', 'xy'],

    vowels: ['a', 'e', 'i', 'o', 'u'],

    inputStrings: function () {
        return input.split('\r\n');
    }
}
