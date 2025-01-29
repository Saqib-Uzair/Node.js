import http from "http";


const server = http.createServer((req,res)=> {
    res.writeHead(200,{'content-type': 'text/plain'});

    res.end("Hello World!");

});

const PORT = 8080;
server.listen(PORT,()=> {
    console.log("Sever is runnig at http://localhost:",PORT)
});