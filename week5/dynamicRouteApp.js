const express=require('express');
const app=express();
const PORT=3001;
app.get('/',(req,res)=>{
  res.send("request received")
})
//route :
app.get('/prod/:id',(req,res)=>{
  res.send(`product Id: ${req.params.id}`)
})
//query
app.get('/prod/', (req, res) => {
  res.send(`product Id: ${req.query.color}`)
})
app.listen(PORT,()=>{console.log("server running successfully")})