console.log("one");
setTimeout(()=>{
    console.log("one.one");
},1000)

console.log("two");
setTimeout(()=>{
    console.log("two.one");
},0)

console.log("three");
setTimeout(()=>{
    console.log("three.one");
},1000)