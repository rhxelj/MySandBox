var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(module1.myString);
    response.write(module2.myVariable);
    module1.myFunction();
    module2.myFunction();
    response.end();
}

http.createServer(onRequest).listen(8000);

// using anonymous Function 

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('From My anonymous Function');
    response.write(module1.myString);
    response.write(module2.myVariable);
    module1.myFunction();
    module2.myFunction();
    response.end();
}).listen(7000);