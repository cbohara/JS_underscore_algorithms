// ======= _.EACH() EXAMPLE=====
var _ = {}; 

_.each = function(list, callback) {
  if(Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    for (var key in list) {
      callback(list[key], key, list);
    }
  }
};

// ======= _.EACH() USING ARRAY=====

var names = ['Jeff', 'Preston', 'Bianca'];

function logTwice(name, index, names) {
  var currentName = names[index]; // correct
  console.log(currentName);

  currentName = name; // correct AND easier
  console.log(currentName);
}

_.each(names, logTwice);

// ======== _.EACH USING OBJECT ========

var superheroes = {
  batman    : 'human',
  superman  : 'alien',
  ironman   : 'human',
  groot     : 'alien',
  wolverine : 'mutant'
};
					   //value  //key   //object
function logNameIfHuman(type, heroName, superheroes) {
  var currentType = superheroes[heroName]; // correct
  // LINE 41 IS THE SAME AS LINE 43! COOL!
  var currentType = type; // correct AND easier 

  if(currentType === 'human') {
  	console.log(heroName);
  }
};
		//object     //function
_.each(superheroes, logNameIfHuman);

// ===== CREATING A FUNCTION USING _.EACH =======
// _.each is just like loopThrough
// do not use return in _.each

var arr = [1, 2, 3, 4, 5];

var addTwoToAllElements = function(arr){
	_.each(arr, function(element, index, list){
		list[index] = element + 2;
	})
};

// ======= NESTED FOR LOOPS USING _.EACH ==========

_.each(classes, function(class) {
  _.each(class.students, function(student) {
    var fullName = student.firstName + ' ' + student.lastName;
    console.log(fullName);
  });
});

// =============== _.MAP USAGE ====================

var pocketmon = ['Charisaur', 'Bulbazard', 'Twomew'];

var stokedFunc = function(val){
  return val + '!!!';
};

var stokedPocketmon = _.map(pocketmon, stokedFunc);

console.log(stokedPocketmon);
//['Charisaur!!!','Bulbazard!!!','Twomew!!!']

// =============== _.MAP DEFINED ================
var _ = { each: function(/*...*/) { /*...*/ } };

_.map = function(list, iterator) {
  var result = []; // make a new array

  _.each(list, function(item, index, list) {
    result.push(iterator(item, index, list));
  });

  return result;
};

// ============ _.MAP VS _.EACH ================

function AnimalMaker(name) {
  return { 
    speak: function () { 
      console.log("my name is ", name); 
    } 
  };
};

var animalNames = ['Frog', 'Falcon', 'Fox'];

// maps will throughcollection, mutates each value, and RETURNS 
var farm = _.map(animalNames, function (name) {
  return AnimalMaker(name);
});

// An each loop **RETURNS NOTHING**
// Just use it to iterate over an array
// Just like loopThrough 
_.each(farm, function (animal) {
  animal.speak();
});

