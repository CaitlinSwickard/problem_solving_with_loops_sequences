// PROJECT 1  Caitlin Swickard


// Write a function squared_sum that takes an array of numbers as a parameter 
// and returns the sum of each number in the array squared:

const squaredSum = (array) => {
  let sum = 0;
  for (let i in array) {
    // num * num = new sum = move through array
    sum += array[i] * array[i];
  }
  return sum;
}


// Write a function mix that takes two strings as parameters and returns one string with the 
// first element from the first string, and the second element from the second string, and every other element thereafter.

const mix = (a, b) => {
  let combinedStr = ''
  let i = 0;

  // interweaving their characters up to the length of the shorter string
  while (i < Math.min(a.length, b.length)) {
    combinedStr = a[i] + b[i]
    i++
  }
  // then appending the remaining characters from the longer string
  result += a.slice(i) + b.slice(i)
  return result
}


module.exports = { squaredSum, mix };