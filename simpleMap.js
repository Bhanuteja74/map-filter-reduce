const testCases = [];

// squares of [1, 2, 3] => [1, 4, 9]
const square = (x) => x * x;
const squaresOf = function (numbers) {
  return numbers.map(square);
};

// --------- test Cases --------
testCases.push([squaresOf, [0, 1, 2, 3, 4], squaresOf([0, 1, 2, 3, 4]), [0, 1, 4, 9, 16]]);

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