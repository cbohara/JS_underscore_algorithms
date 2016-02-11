(function() {
  'use strict';

window.prep = {};


prep.largestNumber = function(arr){
  var largest = 0;
  _.each(arr, function(val){
    if (largest < val){
      largest = val;
    }
  });

  return largest;
};

console.log(prep.largestNumber([23, 48, 177, 41, 481]));

prep.largestString = function(str){
  var largest = '';
  _.each(str.split(' '), function(val){
    if (largest < val){
      largest = val;
    }
  });

  return largest;
};

console.log(prep.largestString("Hey what's up"));

prep.stringReversal = function(str){
  var newStr = [];
  var lastIndex = str.length;
  _.each(str.split(''), function(letter){
    newStr[lastIndex] = letter;
    lastIndex--
  });
  return newStr.join('');
};

console.log(prep.stringReversal('hello'));
// olleh

prep.isPalindrome = function(str){
  var reversedString = prep.stringReversal(str);
  return str === reversedString;
};

console.log(prep.isPalindrome('hello'));
// false
console.log(prep.isPalindrome('hannah'));
// true

prep.countVowels = function(str){
  var letterCache = {'a': true, 'e': true, 'i': true, 'o': true, 'u': true};
  return _.reduce(str, function(x, letter){
    console.log(x);
    if (letterCache[letter]){
      return x+=1;
    } else {
      return x;
    }
  }, 0);
};

console.log(prep.countVowels("Hey what's up"));
// 3

prep.multBy = function(arr, num){
  return _.map(arr, function(val){
    return val * num;
  });
};

console.log(prep.multBy([1, 2, 3, 4, 5], 5));
// [5, 10, 15, 20, 25]

prep.squareBy = function(arr, num){
  return _.map(arr, function(val){
    return Math.pow(num, val);
  });
};

console.log(prep.squareBy([1, 2, 3, 4, 5], 5));
// [5, 25, 125, 625, 3125]


prep.capitalizeFirstLetters = function(str){
  return _.map(str.split(' '), function(word){
    var firstLetter = word[0].toUpperCase();
    return firstLetter + word.slice(1);
  }).join(' ');
};

console.log(prep.capitalizeFirstLetters("Hey what's up"));
// Hey What's Up


prep.collectType = function(arr, type){
  return _.filter(arr, function(val){
    if(typeof val === type){
      return val;
    }
  });
};

console.log(prep.collectType([1, 'hey', "what's", 'yo', 10], "number"));
// ["hey", "what's", "yo"];
console.log(prep.collectType([1, 'hey', "what's", 'yo', 10], "string"));
// [1, 10];


prep.findMean = function(arr){
  var sum = _.reduce(arr, function(start, val){
    return start + val;
  },0)

  return sum / arr.length;
};

console.log(prep.findMean([1, 4, 10, 9]));
// 6





}());


