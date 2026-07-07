let express = require('express');
let app = express();
let bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
let path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get('/register', (req,res)=>{
    res.render('index');
})
app.post('/register',(req,res)=>{
    console.log(req.body);
    res.send("user register succesfully...");

})
app.listen(4000, () => {
    console.log("app is running at port 4000");
});
