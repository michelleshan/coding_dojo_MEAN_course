const http = require('http');
const fs = require('fs');
const server = http.createServer((request,response)=>{
    if (request.url === '/'){
        fs.readFile('./views/index.html','utf8',(errors,contents)=>{
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cars'){
        fs.readFile('./images/elcamino.jpg',(errors,contents)=>{
            response.writeHead(200,{'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cars/new'){
        fs.readFile('./views/new_car.html','utf8',(errors,contents)=>{
            response.writeHead(200,{'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cats'){
        fs.readFile('./images/cutie1.jpeg',(errors,contents)=>{
            response.writeHead(200,{'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    }
    else {
        response.writeHead(404);
        response.end('URL requested is not available');
    }
});

server.listen(7077);
console.log('listening on port 7077');