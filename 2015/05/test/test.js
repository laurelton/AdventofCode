var assert = require('assert');
var common = require('../common.js');

var alfaTests = function (word) {
	return common.hasThreeVowels(word) &&
		common.containsRepeatedCharacters(word) &&
		!common.containsForbiddenStrings(word);
};

var bravoTests = function (word) {
	return common.containsRepeatedPairs(word) && common.containsSpacedRepeat(word);
};

/**
 * ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.
 */
describe('Day 05 part 1', function () {
	describe('ugknbfddgicrmopn is nice because it has three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.', function () {
		it('should return true', function () {
			var word = 'ugknbfddgicrmopn';
			var test = alfaTests(word);
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
			var test = alfaTests(word);
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
			var test = alfaTests(word);
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
			var test = alfaTests(word);
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
			var test = alfaTests(word);
			assert.equal(test, false);
		});
	});
});

/**
 * xycjvvsuaxsbrqal is naughty because it begins with a forbidden substring.
 */
describe('Day 05 part1', function () {
	describe('xycjvvsuaxsbrqal is naughty because it begins with a forbidden substring.', function () {
		it('should return false', function () {
			var word = 'xycjvvsuaxsbrqal';
			var test = alfaTests(word);
			assert.equal(test, false);
		});
	});
});

/**
 * xycjvvsuaxsbrqal is naughty because it begins with a forbidden substring.
 */
describe('Day 05 part1', function () {
	describe('empty string is naughty because it because it fails all tests.', function () {
		it('should return false', function () {
			var word = '';
			var test = alfaTests(word);
			assert.equal(test, false);
		});
	});
});

/**
 * qjhvhtzxzqqjkmpb is nice because is has a pair that appears twice (qj) and a letter that repeats with exactly one letter between them (zxz).
 */
describe('Day 05 part 2', function () {
	describe('qjhvhtzxzqqjkmpb is nice because is has a pair that appears twice (qj) and a letter that repeats with exactly one letter between them (zxz).', function () {
		it('should return true', function () {
			var word = 'qjhvhtzxzqqjkmpb';
			var test = bravoTests(word);
			assert.equal(test, true);
		});
	});
});

/**
 * xxyxx is nice because it has a pair that appears twice and a letter that repeats with one between, even though the letters used by each rule overlap.
 */
describe('Day 05 part 2', function () {
	describe('xxyxx is nice because it has a pair that appears twice and a letter that repeats with one between, even though the letters used by each rule overlap.', function () {
		it('should return true', function () {
			var word = 'xxyxx';
			var test = bravoTests(word);
			assert.equal(test, true);
		});
	});
});

/**
 * uurcxstgmygtbstg is naughty because it has a pair (tg) but no repeat with a single letter between them.
 */
describe('Day 05 part 2', function () {
	describe('uurcxstgmygtbstg is naughty because it has a pair (tg) but no repeat with a single letter between them.', function () {
		it('should return false', function () {
			var word = 'uurcxstgmygtbstg';
			var test = bravoTests(word);
			assert.equal(test, false);
		});
	});
});

/**
 * ieodomkazucvgmuy is naughty because it has a repeating letter with one between (odo), but no pair that appears twice.
 */
describe('Day 05 part 2', function () {
	describe('ieodomkazucvgmuy is naughty because it has a repeating letter with one between (odo), but no pair that appears twice.', function () {
		it('should return false', function () {
			var word = 'ieodomkazucvgmuy';
			var test = bravoTests(word);
			assert.equal(test, false);
		});
	});
});

/**
 * test empty string
 */
describe('Day 05 part 2', function () {
	describe('empty string is naughty because it fails all tests.', function () {
		it('should return false', function () {
			var word = '';
			var test = bravoTests(word);
			assert.equal(test, false);
		});
	});
});
