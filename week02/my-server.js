var http = require('http'); 
http.createServer(function (req, res) {
    res.write('hello world from Audrey Jacobs');
    res.end(); 
}).listen(3000, function(){
    console.log("server running at port 3000"); 
}); 
//executed by node ongoing instance 
//if you change something and refresh it wont change 
//loaded by the rem memory and wont change
// as you change the file 