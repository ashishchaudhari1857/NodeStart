 
 const fs=require("fs");
 
 function  reqhandler(req,res){console.log(req.url)
    const method=req.method;
    if(req.url==='/'  ||  req.url==="GET"){
        try{ res.write("<html>")
     res.write("<head> <title> input form</title></head>")
     res.write("<body> <h1>ashish</h1> <form  action='/msg' method='POST'><input type='text' name='msg' /></form></body>")
     res.write("</html>")
       const content =fs.readFileSync("msg.text" ,"utf-8");
       res.statusCode=200;
       res.end(content)
    }
   catch(error)  {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("File not found");
     }
    }else if(req.url==="/home"){
        res.setHeader("content-Type" ,'text/html')
        res.write("<html>")
        res.write("<head> <title> welcome  to node js</title></head>")
        res.write("<body> <h1> welcome  home</h1></body>")
        
        return  res.end()
    }else if (method === "POST" && req.url === '/msg') {
        console.log("here iam");
        const parsebody=[];
        req.on("data" ,(chunk)=>{
            parsebody.push(chunk)
        })

        
        req.on("end" ,()=>{
         const parsedata =Buffer.concat(parsebody).toString()
         const  message=parsedata.split('=')[1];
         fs.appendFile("msg.text", message, (err) => {
           if (err) {
                console.error(err);
                res.statusCode = 500;
             res.end("Error writing to file");
            } else {
                res.statusCode = 302;
                res.setHeader("location", '/');
               return res.end();
            }
        });
        })

       
    }
    

    else{

     res.setHeader("content-Type" ,'text/html')
     res.write("<html>")
     res.write("<head> <title> welcome  to node js</title></head>")
     res.write("<body> <h1> welcome  to node js</h1></body>")
     res.write("</html>")
      res.end()
    }
 }
 module.exports =reqhandler;


//  module.exports={
//     hadler:reqhandler,
//  }

// module.exports.handler=reqhandler;
// exports.handler=reqhandler;

  