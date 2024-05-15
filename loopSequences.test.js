
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