let http=require('http');
let fs =require('fs');
let path=__dirname+"a.txt";


let server=http.createServer((req,res)=>{
    let data = new Date()+" "+req.url+"\n";
    fs.appendFile(path,data, (err)=>{
        if(err){
            console.log(err);

        }
        else{
            console.log("file is apppended");
        }
    });
    res.write("appned file");
    res.end();
})

server.listen(3000,()=>{
    console.log("srver is running at port 3000");
})