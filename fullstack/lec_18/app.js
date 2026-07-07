let fs=require('fs/promises');
let path=__dirname + '/data1.txt';

fs.writeFile(path, "learning fs module")
.then(()=>{
    console.log("done successfully");
})
.catch((err)=>{
    console.log(err);
})