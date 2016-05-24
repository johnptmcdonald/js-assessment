exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
	async: function(value){
		var promise = new Promise(function(resolve, reject){
			resolve(value);
		});

		return promise;
	},

	manipulateRemoteData: function(url){
		var names = [], promise;

		promise = new Promise(function(resolve, reject){
		var response;
		var request = new XMLHttpRequest();
			request.onreadystatechange = function(){
				if(request.readyState === 4){
					response = JSON.parse(request.responseText);
					for(var i = 0; i < response.people.length; i++){
						for (var prop in response.people[i]){
							names.push(response.people[i][prop]);
						}
					}
					resolve(names.sort());
				}
			};

			request.open('GET', url);
			request.send();
			
		});

		return promise; 
	}
};
