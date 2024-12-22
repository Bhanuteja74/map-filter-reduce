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

// extract the first letters of names from [{ name: "Alice" }, { name: "Bob" }] => ["A", "B"]
const firstCharOfName = (object) => object.name.at(0);
const firstLettersOfNames = function (objects) {
  return objects.map(firstCharOfName);
};

// calculate areas from [{ width: 2, height: 3 }, { width: 4, height: 5 }] => [6, 20]
const rectangleArea = (dimensions) => dimensions.width * dimensions.height;
const calculateAreas = function (rectangles) {
  return rectangles.map(rectangleArea);
};

// extract boolean flags from [{ active: true }, { active: false }] => [true, false]
const getBooleanFlag = (object) => object.active;
const extractFlags = function (objects) {
  return objects.map(getBooleanFlag);
};

// concatenate first and last names from [{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }] => ["Alice Smith", "Bob Brown"]
const fullName = (name) => [name.firstName, name.lastName].join(' ');
const fullNames = function (objects) {
  return objects.map(fullName);
};

// calculate total prices from [{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }] => [20, 20]
// (price * quantity)
const totalPrice = (details) => details.price * details.quantity;
const totalPrices = function (objects) {
  return objects.map(totalPrice);
};

// determine if a person is an adult from [{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }] => [false, true]
// (age >= 18)
const isSeventeenAbove = (details) => details.age > 17;
const isAdult = function (objects) {
  return objects.map(isSeventeenAbove);
};

// create abbreviations from [{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }] => ["NY, USA", "LA, USA"]
const abbreviations = function (objects) { };

// -------- test Cases --------
testCases.push([isAdult, [{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }], isAdult([{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }]), [false, true]]);
testCases.push([totalPrices, [{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }], totalPrices([{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }]), [20, 20]]);
testCases.push([fullNames, [{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }], fullNames([{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }]), ["Alice Smith", "Bob Brown"]]);
testCases.push([extractFlags, [{ active: true }, { active: false }], extractFlags([{ active: true }, { active: false }]), [true, false]]);
testCases.push([calculateAreas, [{ width: 2, height: 3 }, { width: 4, height: 5 }], calculateAreas([{ width: 2, height: 3 }, { width: 4, height: 5 }]), [6, 20]]);
testCases.push([firstLettersOfNames, [{ name: "Alice" }, { name: "Bob" }], firstLettersOfNames([{ name: "Alice" }, { name: "Bob" }]), ["A", "B"]]);
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