const mongoose=require("mongoose");
const submissionSchema=new mongoose({
    problemID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Problem"
    },
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    status:{
        type:string
    }
})
module.exports=mongoose.model("Submission",submissionSchema)