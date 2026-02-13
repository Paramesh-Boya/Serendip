// Minimal static file server for local preview. Usage: node serve.js [port]
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = Number(process.argv[2] || process.env.PORT || 8000);
const root = process.cwd();

const mime = {
  '.html':'text/html', '.css':'text/css', '.js':'application/javascript', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg'
};

http.createServer((req,res)=>{
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if(urlPath === '/') urlPath = '/index.html';
  const filePath = path.join(root, urlPath.replace(/^\//,''));
  fs.stat(filePath, (err, stat) => {
    if(err || !stat.isFile()){
      res.writeHead(404,{'Content-Type':'text/plain'});
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const type = mime[ext] || 'application/octet-stream';
    res.writeHead(200,{'Content-Type':type});
    fs.createReadStream(filePath).pipe(res);
  });
}).listen(port, ()=>console.log(`Serving ${root} at http://localhost:${port}`));
