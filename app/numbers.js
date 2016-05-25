exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	var numBin = num.toString(2);
  	return +numBin[numBin.length-bit];
  },

  base10: function(str) {
  	return parseInt(str, 2);
  },

  convertToBinary: function(num) {
  	var result = num.toString(2);
  	while(result.length < 8){
  		result = '0' + result;
  	}
  	return result;
  },

  multiply: function(a, b) {
  	// need to convert everything to integers
  	var count = 0;

  	function moveDecPoint(num){
  		while(num%1 !==0){
  			num *= 10;
  			count++;
  		}
  		return num;
  	}

  	a = moveDecPoint(a);
  	b = moveDecPoint(b);

  	return (a*b)/Math.pow(10,count);
  }
};
