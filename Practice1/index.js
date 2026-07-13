const http=require('node:http');
const server=http.createServer((req,res)=>{
    console.log("server created");
    res.write("Hello world");

    res.end();

})
const PORT=8035;
server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})