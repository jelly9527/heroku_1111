// let i = 1;

// setInterval(function(){
//     console.log(i);
//     i=i+1;
// }, 10);

// const http = require("http");
// http.createServer(function(request, response) {
//  console.log(request.url)
//    console.log("接收到網頁請求！");
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(3000);
// console.log("Server已開啟port: 3000.");

var http = require("http");
//  node.js 載入模組
http.createServer(function(request, response) {
  console.log(request);
  console.log(request.url);
  if(request.url == '/'){
    console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>index</h1>");
    response.end();
  }else if(request.url == '/sale'){
    console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>sale</h1>");
    response.end();
  }else if(request.url == '/new'){
    console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>new</h1>");
    response.end();
  }else if(request.url == '/women'){
    console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>women</h1>");
    response.end();
  }else if(request.url == '/men'){
    console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>men</h1>");
    response.end();
  }else{
    console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>404 Not Found</h1>");
    response.end();
  }
  
}).listen(process.env.PORT ||3000);
console.log("Server已開啟port: 3000.");

