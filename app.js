const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const path=require("path");
const PORT=3333;

app.use(bodyParser.urlencoded({extended:false}))

shopRouter=require("./routes/shop")
adminRouter=require("./routes/admin.js")

app.use("/shop",shopRouter);
app.use("/admin",adminRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"))
})

app.listen(PORT,(err)=>{
     if(!err){
        console.log("Successfully running on Port "+PORT)
    }else{
        console.log("error occured "+err)
    }
})