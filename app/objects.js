exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	// in this case the fn argument takes no parameters itself, 
  	// so we can just return fn.apply(obj) or fn.call(obj)
		return fn.apply(obj);
		
  	// If you want to be able to pass in arguments to 'fn', we need to grab them like this:
		// var args = Array.prototype.slice.call(arguments,2);
		// return fn.apply(obj, args);

  },

  alterObjects: function(constructor, greeting) {
  		constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
  	var arr = [];
  	for(var prop in obj){
  		if(obj.hasOwnProperty(prop)){
  			arr.push(prop + ': ' + obj[prop]);
  		}
  	}
  	return arr;
  }
};
