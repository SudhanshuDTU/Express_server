const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.json({message: "hii from express"});
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("server started successfully");
})