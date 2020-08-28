var express = require('express'); 
var app = express(); 
var path = require('path'); 
var bodyParser = require('body-parser'); 
var session = require('express-session'); 

app.use(session({
	secret: 'somesecrettokenhere', 
	resave: false, 
	saveUninitialized: true, 
	maxAfe: 5000000
}))

app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));

//-----------------------serial Comm----------------------- 
require(path.join(__dirname, 'serial_comm', 'main.js'));
// // __________________________________________________________________
require(path.join(__dirname, 'server', 'config', 'mongoose.js'));
require(path.join(__dirname, 'server', 'config', 'routes.js'))(app); 

app.listen(5000, function(){
	console.log('we getting funky up in 5000'); 
});



















// ___________________________original code____________

// console.log('Serial Port Opened');
// var SerialPort = require('serialport'); 

// var serialport = new SerialPort("/dev/tty.usbmodem1421", {
// 	baudrate: 9600
// }); 
// serialport.on('open', function(){

// 	serialport.on('data', function(data){
// 		if(data[0] === 1){
// 			console.log('Blue LED ON'); 
// 		}
// 		else if(data[0] === 2){
// 			console.log('Red LED ON')
// 		}
// 	});
// });
// // __________________________________________________________