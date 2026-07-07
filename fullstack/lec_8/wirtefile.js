let fs= require('fs');


console.log(__dirname);

let path=__dirname+"/data.txt";
fs.writeFile(path,"learing node js fs",(err)=>{
    if(err)
        console.log(err);
    else
        console.log("done successfully...")
})
