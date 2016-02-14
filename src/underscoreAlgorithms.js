(function() {
  'use strict';

window.prep = {};


// var nums = [1, 21, 471, 470, 39, 10, 92];

//largestNumber takes an array of numbers and returns the largest number in it 
prep.largestNumber = function(arr){
  // create variable to test against our array values
  var test = 0;
  // loop through the array and replace the test value with the element if the element is greater than the test value
  _.each(arr, function (element) {
    if(element > test){
      test = element;
    }
  });
  // return greatest value
  return test;
};

// var test = prep.largestNumber(nums);
// console.log('test',test);

// largestString takes a sentence and returns the largest word in it
prep.largestString = function(sentence){
  // split the sentence into individual words
  var words = sentence.split(" ");
  // create an empty string to compare against the words in the sentence
  var test = "";
  // loop through the sentence and replace the test value with the element if the element is greater than the test value
  _.each(words, function (element) {
    // compare the test word length against the element from input sentence
    if(element.length > test.length){
      test = element;
    }
  });
  // return longest word
  return test;
};

// var bigWord = prep.largestString('I love california too much');
// console.log('test',bigWord); 
  // california

// stringReversal takes a string and returns it in reverse
prep.stringReversal = function(string){
  // split the string into an array of individual characters
  var eachCharacter = string.split("");
  // create empty array to hold reversed array
  var reverseArray = [];
  // loop through each element in the array
  _.each(eachCharacter, function (element){
    // each element of the eachCharacter array will be unshifted to the front of the array
    reverseArray.unshift(element);
  });
  // transform reverseArray into a string
  var reverseString = reverseArray.join("");
  return reverseString;
};

var olleh = prep.stringReversal('hello');
// console.log(olleh); 
  // 'olleh'

/*
0h    0o
1e    1l
2l    2l
3l    3e
4o    4h
*/

// isPalindrome takes a string and returns whether it's a palindrome or not.
// a palindrome is a word that is spelled the exact same way forward than it is backward.
prep.isPalindrome = function(str){
  // invoke stringReversal in order to compare the reverse string with the original input string
  var reverseString = prep.stringReversal(str);
  // if the string is the same forwards and in reverse, then it is a palindrome and will return true. otherwise false.
  if(reverseString === str){
    return true;
  }
  else
    return false;
};

var truePalindrome = prep.isPalindrome('hannah');
// console.log(truePalindrome);
var falsePalindrome = prep.isPalindrome('hello');
// console.log(falsePalindrome);

// countVowels takes an string and returns the number of vowels in the string.
prep.countVowels = function(string){
  // transform string to upper case values only
  var upperCaseString = string.toUpperCase();
  // split the string into an array of individual characters
  var upperCaseArray = upperCaseString.split("");
  // create array to hold values in string that are vowels
  var vowelsInString = [];
  // loop through the array of characters to determine if the characer is a vowel
  _.each(upperCaseString, function(element){
    if(element === "A" || element === "I" || element === "E" || element === "O" || element == "U"){
      // push vowels into the vowelsInString array
      vowelsInString.push(element);
    }
  });
  // return the number of vowels in the input string
  return vowelsInString.length;
};

var numberOfVowels = prep.countVowels('hey whats up');
// console.log(numberOfVowels); 
// 3

var nums = [1, 2, 3, 4, 5];

//multBy takes an array, and a number and multiplies each value in the array by the input number
prep.multBy = function(arr, num){
  // empty array to hold result
  var newArray = [];
  // _.map applies a function on each value of a collection and returns the results in a new array
  _.map(arr, function(element){
    // multiply each element in the array by the input number and push into the newArray
    newArray.push(element * num);
  });
  return newArray;
};

var newArray = prep.multBy(nums, 3); 
// console.log(newArray); 
// [3, 6, 9, 12, 15];

var nums = [1, 2, 3, 4, 5];

// squareBy takes an array and an exponent number and raises each value in the array by the exponent number
prep.squareBy = function(arr, num){
  // empty array to hold result
  var newArray = [];
  // _.map applies a function on each value of a collection and returns the results in a new array
  _.map(arr, function(element){
    // raise each element in the array to the input number power and push into the newArray
    newArray.push(Math.pow(element,num));
  });
  return newArray;
};

var newArray = prep.squareBy(nums, 3); 
// console.log(newArray); 
// [1, 8, 27, 256, 3125]

// ========NEED HELP ON CAPITALIZE FIRST LETTERS==========
// capitalizeFirstLetters takes a string and returns the same string with all of the first letters capitalized. use _.map OR _.reduce
prep.capitalizeFirstLetters = function(str){
  // split the sentence into individual words
  var words = str.split(" ");
   // empty array to hold result
  var newArray = [];
  // _.map applies a function on each value of a collection and returns the results in a new array
  _.map(words, function(element){
    element.charAt(0).toUpperCase();
  });
};


var string = 'hey how are you?';
var newString = prep.capitalizeFirstLetters(string);
// console.log(newString); 
// 'Hey How Are You?';


// collectType takes an array of mixed values and a type and returns a new array containing the values of the specified type. Look up the _.filter method on underscore.js and use it to solve collectType.
prep.collectType = function(arr, type){
  // create empty array to return results
  var results = [];
  // _.filter looks through each value in the list, returning an array of all the values that pass the predicate
  _.filter(arr, function(element){
    // if the element is a number, it will be added to the results array
    if(typeof element === "number"){
      results.push(element);
    }
  });
  return results;
};

var numsArray = prep.collectType([1, 2, 'hey', true, undefined], 'number')
// console.log(numsArray);
// [1, 2]



// ==========NEED HELP WITH FIND MEAN ==========

// findMean takes an array of numbers and returns the mean of all of the numbers
prep.findMean = function(arr){
  var sum;
  // reduce will sum up the values in the array
  _.reduce(arr, function(memo, num){sum = memo + num;}, 0); 
  console.log(sum);
};
var meanOfNums = prep.findMean([1, 4, 10, 9]);
console.log(meanOfNums); 
// 6

}());


