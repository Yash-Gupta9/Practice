let express = require('express');
let mongoose = require('mongoose');
let todo = require('./model/todo');
let t=require('./seed');
let app=express();

mongoose.connect("mongodb://127.0.0.1:27017/3Y")
.then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
})

 async function seedDB(){
  await todo.insertMany(t);
  console.log("Database seeded successfully");
}

seedDB();
app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})