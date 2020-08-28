function fib() {
	var previous = 0; 
	var current = 1; 
	var future = 0;

	function nacci(){
		
		previous = current 
		current = future
		future = previous + current;
		console.log(future);	
  	}

  return nacci
}

var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"




