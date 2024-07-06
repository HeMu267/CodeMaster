const mongoose=require("mongoose");
const defaultCodeSchema=new mongoose.Schema({
    language:{
        type:"String",
        required:true,
    },
    problemId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Problem"
    }
})