const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("first request!");
})

app.listen(3000,()=>{
    console.log("listern to 3000 port");
})
