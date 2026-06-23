//mddleware function are te function that have access to req(request) and res(response) object.

// Middleware functions can perform the following task:

//Execute any code.
//Make changes to the equest and response objects.
//End the request-response cycle.
//Call the nex middleware function in the stack.


let express = require('express');
let app = express();

app.use((req,res,next)=>{
    console.log('first middleware');
    next();
    console.log('first middleware after next');
})
app.use((req,res,next)=>{
    console.log('second middleware');
   // next();
    console.log('second middleware after next');
})
app.get('/',(req,res,next)=>{
    res.send('this is a / route');
    next();
})
app.listen(3000,()=>{
    console.log('app is running at port 3000');
})