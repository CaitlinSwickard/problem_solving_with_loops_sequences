# Project 1: Writing Loops & Sequences
Please complete the following 2 functions. You can test by running the `npm test` command:


## Problem 1: squared_sum

Write a function ```squared_sum``` that takes an array of numbers as a parameter and returns the sum of each number in the array squared:

| **Example call** | **Returns** |
| -------------- | --------- |
| `squared_sum ([])` | `0` |
| `squared_sum ([5, -2, 3])` | `38` |
| `squared_sum ([-3, 4])` | `25` |
| `squared_sum ([7, -1, 15, 0])` | `275` |

_**Hint**: use the accumulator / aggregator pattern of a variable & for loop over a range_

## Problem 2: mix

Write a function `mix` that takes two strings as parameters and returns one string with the first element from the first string, and the second element from the second string, and every other element thereafter.

| **Example call** | **Returns** |
| -------------- | --------- |
| `mix(hello, there)` | `htehlelroe` |
| `mix(1234, abcd)` | `1a2b3c4d` |
| `mix(12, abcd)` | `1a2bcd` |
| `mix(1234, ab)` | `1a2b34` |

_**Hints**:_
* Just try to print the strings in the right order first, then worry about returning 
* What happens if one string is longer than the other? There are two approaches:
  * Loop over the shortest string & then loop over the longest string
  * Loop over the longest string & have an if inside the loop for the shorter string
* If you put your ifs inside your loop (I recommend using a while), your solution can be under 10 lines long!

## Getting started

### Develop online

Import (or clone) your project repo into an online IDE such as repl.it or vs code. Edit the file. To run, see the commands below.

### Develop in VsCode

With this option, you can develop on your laptop. You will need to install VSCode (or another IDE) and git. VSCode has some built-in git support. Once project is cloned you will need to run "npm install" command to load package dependencies.

## Testing
Run "npm test" command in the terminal to run all tests.


### Run commands
To run just your main code:
`node main.js`

To run all the tests:
`npm test`