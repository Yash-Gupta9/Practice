let express = require('express');
let mongoose = require('mongoose');
let app = express();

let s = require('./seed');         // ✅ correct import
let P1 = require('./db/product');

async function connectdb() {
    await mongoose.connect("mongodb://127.0.0.1:27017/3Y");
    console.log("✅ Connected to DB");
}

async function insert_to_db() {
    await P1.deleteMany({});   // optional: clear old data

    await P1.insertMany(s);    // ✅ insert full seed data
    console.log("✅ Data inserted");
}

async function startServer() {
    try {
        await connectdb();       // wait for DB connection
        await insert_to_db();    // then insert data

        app.listen(3000, () => {
            console.log("🚀 Server running at port 3000");
        });
    } catch (err) {
        console.log(err);
    }
}

startServer();