const http=require("http")

const server =http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type": "text/plain"})
    res.end("Iam Suresh and this is my First Nodejs Deployment")
})
const PORT =process.env.PORT||3000;

server.listen(PORT,()=>console.log("server is running"))
