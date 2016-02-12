//======= UNDERSCORE LIBRARY _.EACH() =====
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