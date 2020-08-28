module.exports = function(){
	return{
		add: function(num1, num2){
			var sum; 
			sum = num1 + num2; 
			console.log(sum);
		}, 
		multiply: function(num1, num2){
			var product; 
			product = num1 * num2;
			console.log(product);
		}, 
		square: function(num){
			num *= num
			console.log(num);
		},
		random_num: function(num1, num2){
			var random_num;
			if(num1 < num2){
				random_num = Math.floor((Math.random() * ((num2 - num1) + 1)) + num1); 	
			}
			else{
				random_num = Math.floor(Math.random() * ((num1 - num2) + 1)) + num2; 	
			}
			console.log(random_num);	
		}
	}	
}();