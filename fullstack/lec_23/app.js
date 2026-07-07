let express = require('express');
let app = express();
let path = require("path");

// FIX 1: use app.set (not app.req)
app.set('view engine', "ejs");

// FIX 2: "views" should be a string
app.set("views", path.join(__dirname, "views"));

let products = [
    {
        Pname: "Phone",
        Pid: 1212,
        Pprice: 4000,
        url: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=500&auto=format&fit=crop&q=60"
    },
    {
        Pname: "Smartwatch",
        Pid: 4444,
        Pprice: 1000,
        url: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?w=500&auto=format&fit=crop&q=60"
    },
    {
        Pname: "Mixer",
        Pid: 2222,
        Pprice: 5000,
        url: "https://plus.unsplash.com/premium_photo-1718043036199-d98bef36af46?w=500&auto=format&fit=crop&q=60"
    },
];

app.get('/products', (req, res) => {
    res.render('index', { products });
});

app.listen(4000, () => {
    console.log("app is running at port 4000");
});