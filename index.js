function hasTargetSum(array, target) {

  // 1.2
  // Slice & reduce first number to add
  let firstOne = array.slice(0, 1).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  // Slice & reduce second number to add
  let firstTwo = array.slice(1, 2).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  // Add both numbers
  let numOneTwo = firstOne + firstTwo;
  // console.log(numOneTwo);

  // Compare number to target
  if(numOneTwo === target){
    return true;
  }


  // 1.3
  // Slice & reduce first number to add
  let firstOneTwo = array.slice(0, 1).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  // Slice & reduce second number to add
  let firstThree = array.slice(2, 3).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  // Add both numbers
  let numOneThree = firstOneTwo + firstThree;
  // console.log(numOneThree);

  // Compare number to target
  if(numOneThree === target){
    return true;
  }


  // 1.4
  // Slice & reduce first number to add
  let firstOneThree = array.slice(0, 1).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  // Slice & reduce second number to add
  let firstFour = array.slice(3, 4).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  // Add both numbers
  let numOneFour = firstOneThree + firstFour;
  // console.log(numOneFour);

  // Compare number to target
  if(numOneFour === target){
    return true;
  }

return false;

};

/* 
  Write the Big O time complexity of your function here
  O(n*2)
*/

/* 
  Add your pseudocode here
  Iterate over the array
  Add each number to the other two numbers, successively, each loop will have 2 outputs
  If at any time, one of the calculations is true, return true, otherwise, return false
*/

/*
  Add written explanation of your solution here
  Create a function that takes sum and target as an argument,
  Write an an algorithm that returns true if any two of the sums numbers add to equal the target number. I'll have an array of numbers for the sum, and one number for the target.

  Test Case
  hasTargetSum((1, 2, 3, 4, 5,), 6);
  => True (4 + 2 = 6)
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
