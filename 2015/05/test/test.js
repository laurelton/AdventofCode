var assert = require('assert');
var part1 = require('../A.js');
var part2 = require('../B.js');
var common = require('../common.js');

// describe('Array', function () {
// 	describe('#indexOf()', function () {
// 		it('should return -1 when the value is not present', function () {
// 			assert.equal([1, 2, 3].indexOf(4), -1);
// 		});
// 	});
// });

/**
 * ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.
 */
describe('Day 05 part 1', function () {
	describe('ugknbfddgicrmopn is nice because it has three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.', function () {
		it('should return true', function () {
			var word = 'ugknbfddgicrmopn';
			var test = common.hasThreeVowels(word) &&
				common.containsRepeatedCharcters(word) && 
				!common.containsForbiddenStrings(word);
			assert.equal(test, true);
		});
	});
});

/**
 * aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.
 */
describe('Day 05 part 1', function () {
	describe('aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.', function () {
		it('should return true', function () {
			var word = 'aaa';
			var test = common.hasThreeVowels(word) &&
				common.containsRepeatedCharcters(word) && 
				!common.containsForbiddenStrings(word);
			assert.equal(test, true);
		});
	});
});

/**
 * jchzalrnumimnmhp is naughty because it has no double letter.
 */
describe('Day 05 part 1', function () {
	describe('jchzalrnumimnmhp is naughty because it has no double letter.', function () {
		it('should return false', function () {
			var word = 'jchzalrnumimnmhp';
			var test = common.hasThreeVowels(word) &&
				common.containsRepeatedCharcters(word) && 
				!common.containsForbiddenStrings(word);
			assert.equal(test, false);
		});
	});
});

/**
 * haegwjzuvuyypxyu is naughty because it contains the string xy.
 */
describe('Day 05 part 1', function () {
	describe('haegwjzuvuyypxyu is naughty because it contains the string xy.', function () {
		it('should return false', function () {
			var word = 'haegwjzuvuyypxyu';
			var test = common.hasThreeVowels(word) &&
				common.containsRepeatedCharcters(word) && 
				!common.containsForbiddenStrings(word);
			assert.equal(test, false);
		});
	});
});

/**
 * dvszwmarrgswjxmb is naughty because it contains only one vowel.
 */
describe('Day 05 part 1', function () {
	describe('dvszwmarrgswjxmb is naughty because it contains only one vowel.', function () {
		it('should return false', function () {
			var word = 'dvszwmarrgswjxmb';
			var test = common.hasThreeVowels(word) &&
				common.containsRepeatedCharcters(word) && 
				!common.containsForbiddenStrings(word);
			assert.equal(test, false);
		});
	});
});