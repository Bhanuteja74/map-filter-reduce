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

// --------- test Cases --------
testCases.push([squaresOf, [0, 1, 2, 3, 4], squaresOf([0, 1, 2, 3, 4]), [0, 1, 4, 9, 16]]);
testCases.push([lengthsOf, ['a', 'ab', '', 'abc'], lengthsOf(['a', 'ab', '', 'abc']), [1, 2, 0, 3]]);

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