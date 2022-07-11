const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    let users = ["darshana","saluka","perera"]
    res.send(users);
})

app.listen(3000,()=>{
    console.log("listern to 3000 port");
})
