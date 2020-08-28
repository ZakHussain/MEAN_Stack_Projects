function runningLogger(){
	console.log('I am running'); 
}

// runningLogger();

// part 2

function multiplyByTen(value){
	value = value*10; 
	return value;
}
// console.log(multiplyByTen(5));

// part 3

function stringReturnOne(){
	var str; 
	str = "I am One";
	return str;
}
function stringReturnTwo(){
	var str; 
	str = "I am Two"; 
	return str; 
}

// console.log(stringReturnOne(), stringReturnTwo());

// part 4
// review this one
function caller(parameter){
	if(typeof parameter === 'function'){
		console.log(parameter());
	} else {
		console.log('im not even a function');
	}
}
// caller(stringReturnOne);

// part 5 

function myDoubleConsoleLog(param1, param2){
	if(typeof param1 === 'function' && typeof param2 === 'function'){
		console.log(param1(), param2());
	
	}
}
// myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

//part 6

function caller2(param){
	console.log('starting'); //#1
	setTimeout(function(){
	if (typeof param === 'function'){
	param(stringReturnOne, stringReturnTwo);
	} 
	}, 2000); 
	console.log('ending?'); //#2
	return "interesting"; //#3
}
caller2(myDoubleConsoleLog);








