let fs=require('fs');
let path=__dirname+'/data.txt';

fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})