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
const reverseArray = (array) => array.reverse();
const stringReverse = (string) => reverseArray([...string]).join('');
const reversedStringsOf = function (strings) {
  return strings.map(stringReverse);
};

// double letters of ["cat", "dog", "bat"] => ["ccaat", "ddoog", "bbaatt"]
const doubleString = (string) => string.repeat(2);
const doubleLetterString = (string) => [...string].map(doubleString).join('');
const doubleLettersOf = function (strings) {
  return strings.map(doubleLetterString);
};

// boolean negation of [true, false, true] => [false, true, false]
const negatedBooleansOf = function (booleans) {
  return booleans.map((boolean) => !boolean);
};

// character codes of ["a", "b", "c"] => [97, 98, 99]
// Use the `charCodeAt` method on each string
const charCodesOf = function (strings) {
  return strings.map((char) => char.charCodeAt());
};

// extract domain names from ["user1@gmail.com", "admin@yahoo.com"] => ["gmail.com", "yahoo.com"]
const getDomian = function (email) {
  const start = email.indexOf('@') + 1;

  return email.slice(start);
}

const domainNamesOf = function (emails) {
  return emails.map(getDomian);
};

// split words in ["hello world", "goodbye moon"] => [["hello", "world"], ["goodbye", "moon"]]
const splitWord = (string) => string.split(' ');
const splitWordsOf = function (strings) {
  return strings.map(splitWord);
};

// join arrays of [["a", "b"], ["c", "d"]] => ["ab", "cd"]
const joinArray = (array) => array.join('');
const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(joinArray);
};

// repeat strings in ["hi", "bye"] => ["hihi", "byebye"]
const repeatedStringsOf = function (strings) {
  return strings.map(doubleString);
};

// count vowels in ["apple", "banana", "grape"] => [2, 3, 2]
const incrementIfVowel = (count, char) => 'aeiou'.includes(char) ? count + 1 : count;
const vowelsCount = function (string) {
  return [...string].reduce(incrementIfVowel, 0);
};

const countVowelsOf = function (strings) {
  return strings.map(vowelsCount);
};

// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]
const reversedArraysOf = function (arrays) {
  return arrays.map(reverseArray);
};

// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]
const withoutVowelsOf = function (strings) { };

// --------- test Cases --------
// testCases.push([squaresOf, [0, 1, 2, 3, 4], squaresOf([0, 1, 2, 3, 4]), [0, 1, 4, 9, 16]]);
// testCases.push([lengthsOf, ['a', 'ab', '', 'abc'], lengthsOf(['a', 'ab', '', 'abc']), [1, 2, 0, 3]]);
// testCases.push([uppercaseOf, ['a', 'ab', '', 'abc'], uppercaseOf(['a', 'ab', '', 'abc']), ['A', 'AB', '', 'ABC']]);
// testCases.push([firstCharactersOf, ['abc', 'a'], firstCharactersOf(['abc', 'a']), ['a', 'a']]);
// testCases.push([truthValuesOf, ['', 'a', 1, 0, true, false], truthValuesOf(['', 'a', 1, 0, true, false]), [true, true, true, false, true, true]]);
// testCases.push([reversedStringsOf, ['', 'abc', 'a'], reversedStringsOf(['', 'abc', 'a']), ['', 'cba', 'a']]);
// testCases.push([doubleLettersOf, ['', 'abc', 'a'], doubleLettersOf(['', 'abc', 'a']), ['', 'aabbcc', 'aa']]);
// testCases.push([negatedBooleansOf, [true, false], negatedBooleansOf([true, false]), [false, true]]);
// testCases.push([charCodesOf, ['a', 'bd', 'c'], charCodesOf(['a', 'b', 'c']), [97, 98, 99]]);
// testCases.push([domainNamesOf, ["user1@gmail.com", "admin@yahoo.com"], domainNamesOf(["user1@gmail.com", "admin@yahoo.com"]), ["gmail.com", "yahoo.com"]]);
// testCases.push([splitWordsOf, ['a', 'a b', 'ab c', ''], splitWordsOf(['a', 'a b', 'ab c', '']), [['a'], ['a', 'b'], ['ab', 'c'], ['']]]);
// testCases.push([joinedArraysOf, [['a', 'b'], ['a', 'a b'], [' ', 'd']], joinedArraysOf([['a', 'b'], ['a', 'a b'], [' ', 'd']]), ['ab', 'aa b', ' d']]);
// testCases.push([repeatedStringsOf, ['ab', 'a', ' ', ''], repeatedStringsOf(['ab', 'a', ' ', '']), ['abab', 'aa', '  ', '']]);
testCases.push([countVowelsOf, ["apple", "banana", "grape"], countVowelsOf(["apple", "banana", "grape"]), [2, 3, 2]]);
testCases.push([reversedArraysOf, [[1, 2, 3], [4, 5, 6]], reversedArraysOf([[1, 2, 3], [4, 5, 6]]), [[3, 2, 1], [6, 5, 4]]]);

// --------- failed test Cases ------
//[function Name,  list,  Expected, Actual]
const failed = [];
let totalCompleted = 0;

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}


const areEqual = function (elementOne, elementTwo) {
  if (typeof (elementOne) === 'object') {
    return areArraysEqual(elementOne, elementTwo);
  }
  return elementOne === elementTwo;
}

testCases.forEach(function ([fun, input, actual, expected]) {
  totalCompleted++;

  if (!areEqual(expected, actual)) {
    failed.push({
      FUNCTION: fun, 'GIVEN LIST': input, ACTUAL: actual, EXPECTED: expected
    });
  }
});

if (failed.length === 0) {
  failed.push({ Status: 'All Pass' })
}
failed.push({ total: totalCompleted });
console.table(failed); 