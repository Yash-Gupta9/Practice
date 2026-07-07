let express = require('express');
let app = express();

app.get("/product/:id", (req, res) => {
    console.log(req.params.id);
    res.send(req.params);
});
http://localhost:4000/product?"Yash"&id=1212
http://localhost:4000/product?"vineet"&id=4444
http://localhost:4000/product?"varun"&id=1111

app.get("/product",(req,res)=>{
    res.send(req.query);
})

app.listen(4000, () => {
    console.log("app is running at port 4000");
});