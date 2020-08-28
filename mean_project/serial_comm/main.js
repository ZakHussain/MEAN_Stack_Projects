console.log('Serial Port Opened');
var SerialPort = require('serialport'); 

var serialport = new SerialPort("/dev/tty.usbmodem1421", {
	baudrate: 9600 
}); 
serialport.on('open', function(){

	serialport.on('data', function(data){
		if(data[0] === 1){
			console.log('Blue LED ON'); 
		}
		else if(data[0] === 2){
			console.log('Red LED ON')
		}
	});
});
// __________________________________________________________________