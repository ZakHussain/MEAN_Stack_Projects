app.factory('buildingFactory', ['$http', function($http){
	var buildings = []; 
	var building = []; 

	function buildingFactory(){
		var _this = this;

		this.create = function(newBuilding){
			$http.post('/buildings', newBuilding).then(function(returned_data){				
				return(returned_data.data);
			})
		}
		this.index = function(callback){
			$http.get('/buildings').then(function(returned_data){
				buildings = returned_data.data; 
				callback(buildings);
			})
		}
	}
	return new buildingFactory();
}])