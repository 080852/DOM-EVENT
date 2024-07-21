const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>working fine</h1>")
})

app.get("/about",(req,res)=>{
    res.send("this is page 1")
})

app.get("/about",(req,res)=>{
    res.send("this is about page2")
})

app.get("/skills",(req,res)=>{
    res.send("skill page")
})



const PORT = 4000;
app.listen(PORT,()=>{
    console.log("server run at port",PORT);
});
