these will not work due to the process by which hoisting occurs. the functions
have been set to an initional value of undefined. 
// varFunction();
// var varFunction = function() {
// 	console.log("How will this get hoisted")
// }

// var varFunction; 
// varFunction();
// varFunction = function() {
// 	console.log("How will this get hoisted")
// }