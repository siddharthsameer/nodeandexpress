const http = require('http');

const server= http.createServer((req,res)=>
{
    if(req.url=='/')
    {
         res.end('welcome to my page!!!!')
        
    }
    else if(req.url=='/history')
    {
         res.end('our history')  
        
    }
    else res.end(`
    <h1>oops!!!</h1>
    <p>not exist</p>
    <a href="/">back to home</a>

    `)
})

server.listen(3000);