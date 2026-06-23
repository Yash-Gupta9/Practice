let express = require('express');
let mongoose = require('mongoose');
let app=express();

mongoose.connect("")
.then(()=>{
    console.log("conected to db");
})
.catch((err)=>{
    console.log(err);
})


app.listen(3000,()=>{
    console.log("app is running at port 3000");

})