let express=require('express');
let app=express();

app.get('/',(res,req)=>{
    res.send("this is a / route");
})
app.listen(3000,()=>{
    console.log("app is running at port 3000");

})