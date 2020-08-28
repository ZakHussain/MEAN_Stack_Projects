function VehicleConstructor(name, numWheels, numPassengers, speed){
// Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
// Add a method called checkMiles that console.logs the distance_travelled
	//private 
	var self = this;
	var distance_travelled = 0;  
	updateDistanceTravelled = function(){
		console.log(distance_travelled += self.speed);
		
	} 

	//public
	this.name = name; 
	this.numWheels = numWheels;
	this.numPassengers = numPassengers;
	this.speed = speed;
	
	this.makeNoise = function(noise){
		var noise = noise || "honk honk";
		console.log(noise);
	}
	this.publicUpdateDistanceTravelled = function(){
		console.log("I am in the public function");
		updateDistanceTravelled();
		console.log ("I am the private variable of distance_travelled" + " ", distance_travelled );
	}
	this.move = function(){
		updateDistanceTravelled();
		// what is th difference about self and this here?
		self.makeNoise();
		this.makeNoise();
	}
	this.checkMiles = function(){
		console.log(distance_travelled);
	}

}

var Bike = new VehicleConstructor('Bike', 2, 10, 30);
// Bike.makeNoise("VRRROOOOM VROOm chugga chug chug...");
// console.log(Bike.speed);
// Bike.publicUpdateDistanceTravelled();
// Bike.publicUpdateDistanceTravelled();
// Bike.publicUpdateDistanceTravelled();
Bike.move();
// Bike.checkMiles();

var Sedan = new VehicleConstructor('Sedan', 4, 20, 30);
// Sedan.makeNoise("Honk Honk!!");
// Sedan.makeNoise();

var Bus = new VehicleConstructor('Bus', 4, 0, 30);
Bus.pickup = function(num){
	this.numPassengers = this.numPassengers + num;
}
// Bus.pickup(4);
// console.log(Bus.numPassengers); 




