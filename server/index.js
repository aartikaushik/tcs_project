var app = require('express')();
var http = require('http').Server(app);




app.get('/', function(req, res){

 res.send("hello world");

});

http.listen(1337, function(){
  console.log('listening on *:1337');
});
