const mongoose=require("mongoose");
const testCasesSchema=new mongoose.Schema({
    submissionID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Submission"
    },
    status:{
        type:String,
        required:true,
    },
    time:{
        type:String,
        required:true,
    },
    memory:{
        type:String,
        required:true,
    },
})
module.exports=mongoose.model("TestCases",testCasesSchema)