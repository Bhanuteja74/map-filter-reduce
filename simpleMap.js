const testCases = [];

// squares of [1, 2, 3] => [1, 4, 9]
const square = (x) => x * x;
const squaresOf = function (numbers) {
  return numbers.map(square);
};

// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]
const stringLength = (string) => string.length;
const lengthsOf = function (strings) {
  return strings.map(stringLength);
};

// uppercase of ["hello", "world"] => ["HELLO", "WORLD"]
const upperCase = (string) => string.toUpperCase();
const uppercaseOf = function (strings) {
  return strings.map(upperCase);
};

// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"]
const firstChar = (string) => string.at(0);
const firstCharactersOf = function (strings) {
  return strings.map(firstChar);
};

// truth values of [0, 1, 2, 3] => [false, true, true, true]
// Assume non-zero numbers are true, and zero is false
const truthyValue = (number) => number !== 0;
const truthValuesOf = function (numbers) {
  return numbers.map(truthyValue);
};

// reverse strings of ["hello", "world"] => ["olleh", "dlrow"]
const stringReverse = (string) => [...string].reverse().join('');
const reversedStringsOf = function (strings) {
  return strings.map(stringReverse);
};

// double letters of ["cat", "dog", "bat"] => ["ccaat", "ddoog", "bbaatt"]
const stringDouble = (string) => string.repeat(2);
const doubleLetterString = (string) => [...string].map(stringDouble).join('');
const doubleLettersOf = function (strings) {
  return strings.map(doubleLetterString);
};

// boolean negation of [true, false, true] => [false, true, false]
const negatedBooleansOf = function (booleans) {
  return booleans.map((boolean) => !boolean);
};

// --------- test Cases --------
testCases.push([squaresOf, [0, 1, 2, 3, 4], squaresOf([0, 1, 2, 3, 4]), [0, 1, 4, 9, 16]]);
testCases.push([lengthsOf, ['a', 'ab', '', 'abc'], lengthsOf(['a', 'ab', '', 'abc']), [1, 2, 0, 3]]);
testCases.push([uppercaseOf, ['a', 'ab', '', 'abc'], uppercaseOf(['a', 'ab', '', 'abc']), ['A', 'AB', '', 'ABC']]);
testCases.push([firstCharactersOf, ['abc', 'a', ''], firstCharactersOf(['abc', 'a', '']), ['a', 'a', '']]);
testCases.push([truthValuesOf, ['', 'a', 1, 0, true, false], truthValuesOf(['', 'a', 1, 0, true, false]), [true, true, true, false, true, false]]);
testCases.push([reversedStringsOf, ['', 'abc', 'a'], reversedStringsOf(['', 'abc', 'a']), ['', 'cba', 'a']]);
testCases.push([doubleLettersOf, ['', 'abc', 'a'], doubleLettersOf(['', 'abc', 'a']), ['', 'aabbcc', 'aa']]);
testCases.push([negatedBooleansOf, [true, false], negatedBooleansOf([true, false]), [false, true]]);

// --------- failed test Cases ------
//[function Name,  list,  Expected, Actual]
const failed = [];

testCases.forEach(function ([fun, input, expected, actual]) {
  if (actual !== expected) {
    failed.push({
      FUNCTION: fun, 'GIVEN LIST': input, EXPECTED: expected, ACTUAL: actual
    });
  }
});

if (failed.length === 0) {
  failed.push({ Status: 'All Pass' })
}

console.table(failed); 