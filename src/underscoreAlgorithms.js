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
prep.stringReversal = function(word){
  // split the word into individual characters
  var characters = word.split("");
  // create string to place replacement word
  var newWord = [];
  // shift each character into the empty string
  _.each(characters, function (element){
    newWord.shift(characters);
  });
};

var olleh = prep.stringReversal('hello');
console.log(olleh); 
  // 'olleh'


prep.isPalindrome = function(str){
  /*

  isPalindrome takes a string and returns whether it's a palindrome or not.

  A palindrome is a word that is spelled the exact same way forward than it is backward.

  use _.each OR a function that utilizes each ;) to solve isPalindrome.


  var truePalindrome = isPalindrome('hannah');
  var falsePalindrome = isPalindrome('hello');

  */
};

prep.countVowels = function(str){
  
  /*
  countVowels takes an string and returns the number of vowels in the string.

  use _.each to complete countVowels

  var numberOfVowels = countVowels('hey whats up');

  console.log(numberOfVowels); // 3
  */

};


prep.multBy = function(arr, num){
  /*
  multBy takes an array, and a number and multiplies each value in the array by the input number.

  use _.map to complete multBy.

  example:
  var nums = [1, 2, 3, 4, 5];
  var newArray = prep.multBy(nums, 3); 
  console.log(newArray) // [3, 6, 9, 12, 15];
  
  */
};

prep.squareBy = function(arr, num){
  /*
  squareBy takes an array, and a number and squares each value in the array by the input number.

  use _.map to complete squareBy.

  example:
  var nums = [1, 2, 3, 4, 5];
  var newArray = prep.squareBy(nums, 3); 
  console.log(newArray) // [1, 8, 27, 256, 3125];
  */

};

prep.capitalizeFirstLetters = function(str){
  /*

  capitalizeFirstLetters takes a string and returns the same string with all of the first letters capitalized.

  use _.map OR _.reduce to complete capitalizeFirstLetters

  var string = 'hey how are you?';

  var newString = capitalizeFirstLetters(string)
  console.log(newString) // 'Hey How Are You?';

  */

};

prep.collectType = function(arr, type){
  /*
  collectType takes an array of mixed values and a type and returns a new array containing the values of the specified type. Look up the _.filter method on underscore.js and use it to solve collectType


  var numsArray = collectType([1, 2, 'hey', true, undefined], 'number')

  console.log(numsArray) // [1, 2];
  */

};


prep.findMean = function(arr){
 /*
  
  findMean takes an array of numbers and returns the mean of all of the numbers.

  look up _.reduce and use it to solve findMean.

  var meanOfNums = prep.findMean([1, 4, 10, 9]);
  console.log(meanOfNums) // 6;
 */
};






}());


