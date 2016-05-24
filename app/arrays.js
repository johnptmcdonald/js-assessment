exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    return arr.reduce(function(a,b){
      return a + b;
    }, 0)
  },

  remove: function(arr, item) {
    // I assume the original arr should NOT be mutated
    var copy = arr.slice(0)
    while(copy.indexOf(item) !== -1){
      copy.splice(copy.indexOf(item), 1);
    }
    return copy;
  },

  removeWithoutCopy: function(arr, item) {
    // I assume the original array SHOULD be mutated
    while(arr.indexOf(item) !== -1){
      arr.splice(arr.indexOf(item), 1);
    }   
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    // make an object of multiple stacks
    var itemCount = {}, dupes = [];

    for(var i = 0; i < arr.length; i++){
      if(itemCount[arr[i]] === undefined){
        itemCount[arr[i]] = 1;
      } else {
        itemCount[arr[i]]++;
      }
    }

    for(var prop in itemCount){
      if(itemCount[prop] > 1){
        dupes.push(+prop)
      }
    }

    return dupes;
  },

  square: function(arr) {
    return arr.map(function(element){
      return element*element
    })
  },

  findAllOccurrences: function(arr, target) {
    var result = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === target){
        result.push(i);
      }
    }
    return result;
  }
};
