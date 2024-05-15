
// npm init -y                   //installs package json
// npm install --save-dev jest   //testing library for development
// test script = "jest"          //type "npm test" to run tests
// file name should equal js file name with test.js added to end
// ex = sum.js === sum.test.js

// import function(s) from file
const { squaredSum, mix } = require('./loopSequences')

// basic test template
// test('', () => {
//   expect().toBe()
// })

// Problem 1 Tests
test('Squared sum empty', () => {
  expect(squaredSum([])).toBe(0)
})

test('Squared sum 1', () => {
  expect(squaredSum([4])).toBe(16)
})

test('Squared sum 2', () => {
  expect(squaredSum([-3, 4])).toBe(25)
})

test('Squared sum 3', () => {
  expect(squaredSum([5, -2, 3])).toBe(38)
})

test('Squared sum 4', () => {
  expect(squaredSum([7,-1,15,0])).toBe(275)
})

// Problem 2 Tests
test('Mix is empty', () => {
  expect(mix('','')).toBe('')
})

test('Mix Even', () => {
  expect(mix("hello", "there")).toBe("htehlelroe");
});

test('Mix 4-4', () => {
  expect(mix("1234", "abcd")).toBe("1a2b3c4d");
});

test('Mix 2-4', () => {
  expect(mix("12", "abcd")).toBe("1a2bcd");
});

test('Mix 4-2', () => {
  expect(mix("1234", "ab")).toBe("1a2b34");
});