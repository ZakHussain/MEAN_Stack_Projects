// var hello = "interesting";
// function example() {
//   var hello = "hi!";
//   console.log(hello);
// }
// example();
// console.log(hello);

//this would be rearranged as 

// var hello;
// function example() {
// 	var hello;
// 	hello = "hi"
// 	console.log(hello);
// }
// hello = "interesting"; 
// example();
// console.log(hello);

// problem 1: 

// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable)
// }
// console.log(first_variable);

// this would be written as 

// var first_variable; 
// function firstFunc(){
// 	var first_variable;
// 	first_variable = "Not anymore";
// 	console.log(first_variable);
// }
// first_variable = "Yipee"
// console.log(first_variable)


// problem 2
// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);

// //______________________

// var food; 
// function eat(){
// 	var food; 
// 	food = "half-chicken";
// 	console.log(food);
// 	food = "gone";
// 	console.log(food);
// }
// eat();
// food = "chicken"
// console.log(food);

// problem 3
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);


var new_word; 
function lastFunct(){
	new_word = "old"
}
new_word = "NEW!"
console.log(new_word);







