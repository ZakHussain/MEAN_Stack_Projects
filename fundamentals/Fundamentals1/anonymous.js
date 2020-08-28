var sumXY = function(x,y){
	var sum;
	sum = 0;
	for(var i=x; i<=y; i++){
		sum += i;	
	}
	return(sum);
}

var minVal = function(arr){
	var min;
	min = arr[0];
	for(var i=1; i<arr.length;i++){
		if(min > arr[i]){
			min = arr[i];
		}
	}
	return min;
}


var avg = function(arr){
	var sum; 
	sum = 0;
	for(var i=0; i<arr.length; i++){
		sum += arr[i]; 
	}
	return (sum/arr.length);
}
// _______________create an object________________

var myObject = {
	sumXY: function(x, y){
		var sum;
		sum = 0; 
		for( var i=x; i<=y; i++){
			sum+=i; 
		}
	},

	minVal: function(arr){
		var min;
		min = arr[0];
		for(var i=1; i<arr.length;i++){
			if(min > arr[i]){
				min = arr[i];	
			}
		}
		return minVal; 
	},
	avg : function(arr){
		var sum; 
		sum = 0;
		for(var i=0; i<arr.length; i++){
			sum += arr[i]; 
		}
		return (sum/arr.length);
	}
}

// what is an object literal>
//properties are the information that exists about something
//the methods act as instructions
var person = {
	name: "Zak",
	distance_traveled: 0, 
	say_name : function(){
		console.log(person.name);
	},
	say_something : function() {
		console.log("Hello, I am"+" ", person.name);
	}, 
	walk: function(){
		console.log(person.name, " "+'is walking');
		person.distance_traveled += 3;
		console.log(person.distance_traveled);
		return person; 
	},
	run: function(){
		console.log(person.name, " "+'is running')
		person.distance_traveled += 10; 
		console.log(person.distance_traveled);
		return person; 
	}
}

person.run(), person.run(), person.run();

//I threw this inot a console.log. this gave me not only the value that I expected, but it also gave me a value undefined. why?












