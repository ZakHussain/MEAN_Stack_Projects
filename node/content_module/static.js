module.exports = function(){
	return{
		static: function (request, response){
		  	if (request.url === '/'){
			    fs.readFile('views/index.html', 'utf8', function (errors, contents){
			      response.write(contents); 
			      response.end();
			    });
  			} 
	  		else if(request.url !== '/'){
			    fs.readFile('views/dojo.html', 'utf8', function (errors, contents){
			      response.write(contents);
			      response.end();
			    });
	 		} 
	  		else {
	     		response.end('File not found!!!');
	  		}
	  	}	
	}
}();