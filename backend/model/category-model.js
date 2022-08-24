const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    userId: {
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"signup"
    },
    categoryName: {
        type: String,
        required:true
    },      
    userinfo:{
        type:Object,
        require:true
    }
}, { timestamps: true })

module.exports = mongoose.model("category",categorySchema)