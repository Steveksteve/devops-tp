const http = require('http');
http.createServer((req,res)=>{
  if(req.url==="/health"){res.end("ok");return;}
  res.end("hello");
}).listen(3000);
