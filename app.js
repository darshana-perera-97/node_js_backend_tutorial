const express = require('express');

const app = express();

const customMiddleware = ()=>{
    console.log("Welcome to my middleware");
}

app.use(customMiddleware);

app.get("/",(req,res)=>{
    res.send("Server started");
})
app.get("/users",(req,res)=>{
    let users = ["darshana","saluka","perera"]
    res.send(users);
})
app.get("/create_users",(req,res)=>{
    res.send(req);
})

app.listen(3000,()=>{
    console.log("listern to 3000 port");
})
