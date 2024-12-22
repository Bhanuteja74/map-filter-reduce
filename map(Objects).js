const testCases = [];

// extract names from [{ name: "Alice" }, { name: "Bob" }] => ["Alice", "Bob"]
const getName = (object) => object.name;
const extractNames = function (objects) {
  return objects.map(getName);
};

// extract ages from [{ age: 25 }, { age: 30 }] => [25, 30]
const getAge = (object) => object.age;
const extractAges = function (objects) {
  return objects.map(getAge);
};

// -------- test Cases --------
testCases.push([extractAges, [{ age: 25 }, { age: 30 }], extractAges([{ age: 25 }, { age: 30 }]), [25, 30]]);
testCases.push([extractNames, [{ name: "Alice" }, { name: "Bob" }], extractNames([{ name: "Alice" }, { name: "Bob" }]), ["Alice", "Bob"]]);

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