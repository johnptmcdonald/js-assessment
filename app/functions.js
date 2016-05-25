exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null,arr);
  },

  speak: function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction: function(str) {
    return function(anotherStr){
      return str + ', ' + anotherStr;
    };
  },

  makeClosures: function(arr, fn) {
    var result = [];
    function makeFunc(i){
      return function(){
        return fn(i);
      };
    }
    for(var i = 0; i < arr.length; i++){
      result.push(makeFunc(arr[i]));
    }
    return result;
  },

  partial: function(fn, str1, str2) {
    return fn.bind(null, str1, str2);
  },

  useArguments: function() {
    return Array.prototype.reduce.call(arguments, function(a,b){
      return a + b;
    });
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments,1);
    return function(){
      args = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, args);
    };
  },

  curryIt: function(fn) {
    // fn expects three arguments, x, y, z
    // if we give it less than three, we get back a curried function
    // if we give it three, we invoke it with fn.apply(null, allTheArgs)

    // start with no args, we'll keep filling it up until it runs
    // we'll either return a curried function, or load it up until we can 'apply' it
    var args = [];

    function curried(arg){
      args.push(arg);
      if(args.length === fn.length){
        return fn.apply(null, args);
      } else {
        return curried;
      }
    }

    return curried;
    
  }
};
