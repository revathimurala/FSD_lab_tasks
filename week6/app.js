const express=require('express');
const app=express();
const PORT=3002;
const
app.get('/',(req,res)=>{
  res.send("request received")
})
app.listen(PORT,()=>{console.log("server running successfully")})