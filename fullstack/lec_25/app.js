let express = require('express');
let bodyparser = require("body-parser");
let methodOverride = require('method-override');

let app = express();
let path = require("path");

app.set('view engine', "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

let Products = [
    {
        Pname: "Phone", Pid: 1212, Pprice: 40000,
        url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
        Pname: "smartwatch", Pid: 1111, Pprice: 1000,
        url: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a"
    },
    {
        Pname: "earbuds", Pid: 1223, Pprice: 2000,
        url: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb"
    }
];

// ✅ Show all products
app.get('/products', (req, res) => {
    res.render('index', { Products });
});

// ✅ New product form
app.get('/products/new', (req, res) => {
    res.render('new');
});

// ✅ Show single product
app.get('/product/:id', (req, res) => {
    let p = Products.find(data => data.Pid == req.params.id);
    res.render('show', { p });
});

// ✅ Add product
app.post("/products", (req, res) => {
    let { a_name, a_price, a_url } = req.body;

    let p = {
        Pname: a_name,
        Pprice: a_price,
        url: a_url,
        Pid: Math.floor(Math.random() * 10000)
    };

    Products.push(p); // ✅ fixed
    res.redirect('/products');
});

// ✅ Edit form
app.get('/product/:id/edit', (req, res) => {
    let e = Products.find(data => data.Pid == req.params.id);
    res.render('edit', { e });
});

// ✅ Delete product
app.delete('/product/:id', (req, res) => {
    let id = req.params.id;

    Products = Products.filter(data => data.Pid != id);

    res.redirect('/products');
});

// ✅ Server
app.listen(4000, () => {
    console.log("app is running at port 4000");
});