
const mongoose = require("mongoose")

const bikeSchema = mongoose.Schema({
    userId: {
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"signup"
    },
    // products:[{
    //          productId:{
    //             type:mongoose.Types.ObjectId,
    //             required:true,
    //             ref:"category"
    //          },
    //          heading: {
    //              type: String,
    //              required:true
    //          },
    //          desc: {
    //              type: String,
    //              required:true
    //          },
    //          price: {
    //              type: Number,
    //              required:true
    //          },
    //          pic: {
    //              type: String,
    //              required:true
    //          },
    //          categoryName:{
    //             type:String,
    //             required:true,
    //             ref:"category"
    //          }
    // }],

    heading: {
        type: String,
        required:true
    },
    desc: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    pic: {
        type: String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    userinfo:{
        type:Object,
        require:true
    }
}, { timestamps: true })

module.exports = mongoose.model("bikeTask",bikeSchema)