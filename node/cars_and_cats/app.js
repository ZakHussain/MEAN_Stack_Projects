
var http = require('http');
console.log(http.createServer+ " hello master");
var fs = require('fs');
// console.log("this is fs", fs);

var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    if(request.url === '/') {
        fs.readFile('views/j.html', 'utf8', function (errors, contents){
            //this will act like boolean(falsey)
            if( errors ){
                // console.log(errors);
                response.writeHead(404);
                return response.end('File not found!!!'); 

            }
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            // console.log() look for the objects in line 11( find the response from fs)
            response.write(contents);  
            response.end();
        });
    }
    else if(request.url === '/cars'){
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/cats'){
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/new_car'){
        fs.readFile('views/new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
// ____________________________________car images______________________
    else if(request.url === '/img/car1.png'){
        fs.readFile('./images/img/car1.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/img/car2.jpg'){
        fs.readFile('./images/img/car2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/img/car3.png'){
        fs.readFile('./images/img/car3.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        })
    }
// _____________________________Cats___________________________________
    else if(request.url === '/img/Cat1.gif'){
        fs.readFile('./images/img/Cat1.gif', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/gif'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/img/Cat2.jpg'){
        fs.readFile('./images/img/Cat2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/img/cat3.jpg'){
        fs.readFile('./images/img/cat3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(7077);
console.log("Running in localhost at port 7077");



