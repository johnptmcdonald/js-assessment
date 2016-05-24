exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
  	var num = start, intervalId;

  	console.log(num);

  	intervalId = setInterval(function(){
			console.log(++num);
			if(num >= end){
				clearInterval(intervalId);
			}
  	},100);

  	return {
			cancel: function(){
				clearInterval(intervalId);
			}
		};
  }
};
