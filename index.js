const express=require("express");
const app=express();
const dotenv=require("dotenv");
const database=require("./Config/database");
const userRoutes=require("./Routes/user")
const PORT=process.env.PORT || 4000;
database.ConnectDB();

app.use(express.json());
app.use("/api/v1/auth",userRoutes);``
app.get("/",(req,res)=>{
    return res.json({
            success:true,
            message:"Your server is up and running",
    })
})
app.listen(PORT,()=>{
    console.log(`app is running ${PORT}`);
})