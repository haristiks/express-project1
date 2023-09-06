const express=require("express");
const app=new express();
const port = 8000;

const userRoute=require("./routes/User")
app.use('/users', userRoute)

app.listen(port,()=>{
    console.log("server running on port :"+ port);
})

