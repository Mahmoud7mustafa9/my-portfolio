const express = require("express");
const app = express() ;
const port =  8000;
app.use(express.static("public"));

app.set("view engine","ejs");

const path = require('path');


const mongoose = require ("mongoose");
const url = "mongodb+srv://7odamostafa97:s2mdHnKf08hNkxTZ@cluster0.yxwqa9j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url).then(
    ()=>{
        app.listen(port,()=>{
            console.log(`http://localhost:${port}`)
        })
    }
).catch((err)=>{
    console.log(err)
})


app.get("/",(req,res)=>{
    res.render("start")
})