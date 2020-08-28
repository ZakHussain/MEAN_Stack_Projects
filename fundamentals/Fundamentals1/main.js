x = [3,5,'Dojo', 'rocks','Michael','Sensei']
for (var i=0; i<x.length; i++){
	console.log(x[i]);
}
// second bullet 
x.push(100);
console.log(x)
// third bullet
new_arr = ["hello", "world", "Javascript is Fun"]
x.push(new_arr);
console.log(x);
console.log("here it is" + " " ,x);
// fourth bullet
console.log('*********************')
var sum = 0; 
for(var i=1; i<=500; i++){
	sum += i; 
}
console.log(sum); 
console.log('*********************');
// fifth bullet
arr=[1,5,90,25,-3,0];
var min = arr[0]; 
for(var i=1; i<arr.length; i++){
	if(arr[0]>arr[i]){
		min = arr[i]; 
	}
}
console.log(min);
console.log('*********************');
//sixth bullet
arr=[1,5,90,25,-3,0];
var sum = 0;
var avg;
for(var i=0; i<arr.length; i++){
	sum += arr[i]; 
}
avg = sum/arr.length;
console.log(avg);
console.log('**********************');
//part 2
var new_ninja = {
	name: 'Jessica', 
	profession: 'coder', 
	favorite_language: 'Javascript', 
	dojo: 'Dallas'
}
console.log(new_ninja.name, new_ninja.profession, new_ninja.favorite_language, new_ninja.dojo);

for (index in new_ninja){
	console.log(new_ninja[index]);
}

for (key in new_ninja){
	console.log(new_ninja[key]);
}
console.log('**********************')

// Fundamentals Part II
//1
function between(x,y){
	var sum;
	sum = 0;
	for(var i=x; i<=y; i++){
		sum += i;	
	}
	return(sum);
}

console.log(between(1,5));

console.log('**********************');

//2
function minVal(arr){
	var min;
	min = arr[0];
	for(var i=1; i<arr.length;i++){
		if(min > arr[i]){
			min = arr[i];
		}
	}
	return min;
}
console.log(minVal([1,2,4,5,0]));

console.log('**********************');

function avgVal(arr){
	var sum; 
	var avg;
	sum = 0;
	for(var i=0; i<arr.length; i++){
		sum += arr[i]; 
	}
	avg = sum/arr.length;
	console.log(sum);
	return avg
}
console.log(avgVal([1,2,3,4,5]));

// ______________________anononymous functions______________























