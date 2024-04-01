const http=require('node:http')

const hostname='127.0.0.1'
const port=3000

// const server=http.createServer((req,res)=>{
//     if(res.method ==='Get'){
//         res.statusCode=200
//         res.setHeader('Content-Type','application/json')
        
//     }
//     res.statusCode=200;
//     res.setHeader('Content-Type','application/json')
//     res.end('helloooo')
// })

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.statusCode=200
    res.setHeader('Content-Type','application/json')
    res.end('55555')
  }

  if (req.method === 'POST') {
    // ...省略其他程式碼
  }

  if (req.method === 'PUT') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: `更新成功, ${JSON.parse(body).data}!` }));
    });
  }

  if (req.method === 'DELETE') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: '刪除成功' }));
  }
});

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`)
})
