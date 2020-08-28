function person(name){
	return {
		name: name,
		distance_traveled: 0, 
		say_name: function(){
			console.log(person.name);
		}, 
		say_something: function(phrase){
			console.log(person.name, " " + "says" + " ", phrase);
		}, 
		walk: function(){
			console.log(this.name, " " + "is walking"); 
			this.distance_traveled += 3; 
			console.log(this.distance_traveled);
			return this; 
		}, 
		run: function(){
			console.log(person.name, " " + "is running"); 
			person.distance_traveled += 10; 
			console.log(person.distance_traveled);
			return person ;
		}
	}
}

// var newPerson = person('Zak'); 
// console.log(newPerson.walk());


function NinjaConstructor(name, cohort){

  var belts = ["yellow", "red", "black"]
  this.name = name;
  this.cohort = cohort;
  this.beltLevel = 0;
  this.levelUp = function(){
    if (this.beltLevel < 2){
      this.beltLevel += 1;
      this.belt = belts[this.beltLevel];
    }
    return this.belt
  }
  this.belt = belts[this.beltLevel];

}

var ninja = new NinjaConstructor('curren', 'monkeys r us');

console.log(ninja.beltLevel);













