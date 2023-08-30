const http= require("http");
 const  server=http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url==='/'){
     res.write("<html>")
     res.write("<head> <title> input form</title></head>")
     res.write("<body> <h1>ashish</h1> <form  action='/msg' method='POST'><input type='text' name='msg' /></form></body>")
     res.write("</html>")
     return  res.end()
    }else if(req.url==="/home"){
        res.setHeader("content-Type" ,'text/html')
        res.write("<html>")
        res.write("<head> <title> welcome  to node js</title></head>")
        res.write("<body> <h1> welcome  home</h1></body>")
        res.write("</html>")  

        return  res.end()
    }
     res.setHeader("content-Type" ,'text/html')
     res.write("<html>")
     res.write("<head> <title> welcome  to node js</title></head>")
     res.write("<body> <h1> welcome  to node js</h1></body>")
     res.write("</html>")
})

server.listen(3000, ()=>{
    console.log(" ashish")
})