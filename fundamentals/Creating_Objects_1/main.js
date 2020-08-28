function VehicleConstructor(name, numWheels, numPassengers){

	this.name = name; 
	this.numWheels = numWheels;
	this.numPassengers = numPassengers;

	this.makeNoise = function(noise){
		console.log(noise);
	}
}

var Bike = new VehicleConstructor('Bike', 2, 10);
var Sedan = new VehicleConstructor('Sedan', 4, 20);
var Bus = new VehicleConstructor('Bus', 4, 0);

Bus.pickup = function(num){
	this.numPassengers = this.numPassengers + num;
}


Bike.makeNoise("VRRROOOOM VROOm chugga chug chug...");
Sedan.makeNoise("Honk Honk!!");
Bus.pickup(4);
console.log(Bus.numPassengers); 