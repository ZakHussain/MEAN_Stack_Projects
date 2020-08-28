app.factory('roomFactory', ['$http', function($http){
	var rooms = []; 

	function roomFactory(){
		var _this = this;

		this.create = function(newRoom){
			$http.post('/rooms', newRoom).then(function(returned_data){
				return(returned_data.data);
			})
		}
		this.index = function(callback){
			$http.get('/rooms').then(function(returned_data){;
				rooms = returned_data.data; 
				callback(rooms);
			})
		}	
		// this.serial_comm = function(callback){
		// 	$http.get('/room_serial_comm').then(function(data)){
		// 		//create variable to store the values of the chip
		// 		}
		// 	}
	}
	return new roomFactory();
}])