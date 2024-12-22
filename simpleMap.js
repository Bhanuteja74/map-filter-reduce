const testCases = [];

const invert = function (f) {
  return function (...args) {
    return !f(...args)
  }
}

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
const splitWords = (string) => string.split(' ');
const splitWordsOf = function (strings) {
  return strings.map(splitWords);
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
const isVowel = (char) => 'aeiou'.includes(char);
const incrementIfVowel = (count, char) => isVowel(char) ? count + 1 : count;
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
const removeVowels = function (string) {
  const isNotVowel = invert(isVowel)
  return [...string].filter(isNotVowel).join('');
};

const withoutVowelsOf = function (strings) {
  return strings.map(removeVowels);
};

// cumulative sums of [[1, 2, 3], [4, 5, 6]] => [[1, 3, 6], [4, 9, 15]]
// Example: cumulative sum of [1, 2, 3] is [1, 1+2, 1+2+3]
const addRunningTotal = function (array, num) {
  array.push(array.at(-1) + num);

  return array;
};
const runningTotal = function (numbers) {
  return numbers.reduce(addRunningTotal, [0]).slice(1);
};

const cumulativeSumsOf = function (arrays) {
  return arrays.map(runningTotal);
};

// reverse words in ["hello world", "goodbye moon"] => ["olleh dlrow", "eybdoog noom"]
const reversedSentence = function (word) {
  return splitWords(word).map(stringReverse);
}
const reversedWordsOf = function (strings) {
  return strings.map(reversedSentence);
};

// extract unique characters from ["apple", "banana", "grape"] => ["apl", "ban", "gra"]
// Maintain the order of their first appearance in each string
const addUniques = (string, char) => string.includes(char) ? string : string + char;
const uniqueCharacters = function (word) {
  return [...word].reduce(addUniques, '');
};
const uniqueCharactersOf = function (strings) {
  return strings.map(uniqueCharacters);
};

// generate ranges from [3, 5, 2] => [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]
const range = function (end) {
  const numInRange = [];

  for (let num = 0; num < end; num++) {
    numInRange.push(num);
  }

  return numInRange;
};

const rangesOf = function (numbers) {
  return numbers.map(range);
};

// capitalize first letters of ["hello world", "goodbye moon"] => ["Hello World", "Goodbye Moon"]
const capitalizedWord = (word) => word.at(0).toUpperCase() + word.slice(1);
const capitalize = function (string) {
  return splitWords(string).map(capitalizedWord).join(' ');
};

const capitalizedFirstLettersOf = function (strings) {
  return strings.map(capitalize);
};

// find word lengths in ["apple pie", "banana split"] => [[5, 3], [6, 5]]
const wordLengths = (string) => splitWords(string).map(stringLength);
const wordLengthsOf = function (strings) {
  return strings.map(wordLengths);
};

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
// testCases.push([countVowelsOf, ["apple", "banana", "grape"], countVowelsOf(["apple", "banana", "grape"]), [2, 3, 2]]);
// testCases.push([reversedArraysOf, [[1, 2, 3], [4, 5, 6]], reversedArraysOf([[1, 2, 3], [4, 5, 6]]), [[3, 2, 1], [6, 5, 4]]]);
// testCases.push([withoutVowelsOf, ["apple", "banana", "grape"], withoutVowelsOf(["apple", "banana", "grape"]), ["ppl", "bnn", "grp"]]);
// testCases.push([cumulativeSumsOf, [[1, 2, 3], [4, 5, 6]], cumulativeSumsOf([[1, 2, 3], [4, 5, 6]]), [[1, 3, 6], [4, 9, 15]]]);
// testCases.push([reversedWordsOf, ["hello world", "goodbye moon"], reversedWordsOf(["hello world", "goodbye moon"]), ["olleh dlrow", "eybdoog noom"]]);
// testCases.push([uniqueCharactersOf, ["apple", "banana", "grape"], uniqueCharactersOf(["apple", "banana", "grape"]), ["aple", "ban", "grape"]]);
testCases.push([rangesOf, [3, 5, 2], rangesOf([3, 5, 2]), [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]]);
testCases.push([capitalizedFirstLettersOf, ['abc def', 'a bc d'], capitalizedFirstLettersOf(['abc def', 'a bc d']), ['Abc Def', 'A Bc D']]);
testCases.push([wordLengthsOf, ['abc def', 'a bc d'], wordLengthsOf(['abc def', 'a bc d']), [[3, 3], [1, 2, 1]]]);

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