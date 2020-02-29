var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(request, response) {
	response.send('Hello world my name is Huy');
})

app.listen(port , function(){
	console.log('Listening port '+ port);
})