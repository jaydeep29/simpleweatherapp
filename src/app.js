const express = require("express")
const path = require ("path");
const app = express ();
app.use(express.static("../public"))
app.get("/",(req,res)=>{
    res.send("welcome")
})
app.listen(5000,()=>{
    console.log("server is listening on port 5000")
})