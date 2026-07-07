let express=require('express');
let app=express();
let jwt=require("jsonwebtoken");
require("dotenv").config();
app.get('/register',(req,res)=>{
    let {name,pass}=req.query;
    let token=jwt.sign({"Username":name,"password":pass},SECRET);
    console.log(token)
})

app.listen(3000,()=>{
    console.log("server is running at port 3000");
})