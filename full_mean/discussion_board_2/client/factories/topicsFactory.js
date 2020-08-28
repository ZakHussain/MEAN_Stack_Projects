app.factory('topicFactory', ['$http', function($http){
	var topics = []; 
	var topic = [];

	function topicFactory(){
		var _this = this; 

		this.index = function(callback){
			$http.get('/topics').then(function(returned_data){
				topics = returned_data.data;
				callback(returned_data);
			})
		}
		this.create = function(newTopic){
			$http.post('/topics').then(function(returned_data){
				return(returned_data.data);
			})
		}
	}
	return new topicFactory();
}])