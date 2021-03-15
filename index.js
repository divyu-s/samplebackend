import express from "express";

const app = express();
const PORT = 4000;

app.get('/',(req,res)=>{
       res.send(`Node and express server is running on ${PORT}`);
});

app.get('/greet',(req,res)=>{
    res.send(`Hi, How are you doing`);
});
app.listen(PORT,()=>{
    console.log(`Node and express server is running on ${PORT}`)
})