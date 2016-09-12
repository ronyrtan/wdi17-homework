// Array and Functions Bonus Material
//
// Define a function maxOfTwoNumbers that takes two numbers as arguments
// and returns the largest of them. Use the if-then-else construct available in
// Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

var maxOfTwoNumbers = function(num1, num2) {
  var result;
  if (num1 > num2) {
    result = num1;
  } else {
    result = num2;
  }

  console.log(result);
}

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

var maxOfThree = function(num1, num2, num3) {
  var result;
  if (num1 > num2) {
    result = num1;
    if (num1 < num3) {
      result = num3;
    }
  } else if (num2 > num1) {
    result = num2;
    if (num2 < num3) {
      result = num3;
    }
  }

  console.log(result);
}

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel,
// false otherwise.


var isVowel = function(string) {
  if (string.match(/^(a|e|i|o|u)$/)) {
    return true;
  } else {
    return false;
  }
}

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively)
// all the numbers in an array of numbers. For example, sumArray([1,2,3,4])
//should return 10, and multiplyArray([1,2,3,4]) should return 24.

// var nums = [1,2,3,4];
//
// var sumArray = function(nums) {
//   for (i = 0; i < nums.length; i++) {
//     console.log(i * ())
//   }
//
// }

var nums = [1,2,3,4];

var sumArray = function(nums) {
  var total = nums.reduce(function(a,b){
    return a + b;
  }, 0);
  console.log(total);
}


// Bonus
//
// Define a function reverseString that computes the reversal of a string. For example,
// reverseString("jag testar") should return the string "ratset gaj".


var reverseString = function(string) {
  return string.split('').reverse().join('');
}


// Write a function findLongestWord that takes an array of words and returns the length of the longest one.






// Write a function filterLongWords that takes an array of words and an number i and returns
// the array of words that are longer than i.
