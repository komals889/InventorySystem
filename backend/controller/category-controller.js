const category=require("../model/category-model")

exports.cretedData = async(req,res) => {
    try {
     const result = await category.create(req.body)
     res.json({
         message: "created Data",
         success: true,
         data:result
     })
    } catch (error) {
     res.json({
         message: "error"+error,
     })
    }
 }
 exports.getAllCategoryData = async(req,res) => {
     try {
         const result = await category.find({userId:req.params.id})
         console.log(result)
     res.json({
         message: "get all Data",
         success: true,
         data:result
     })
    } catch (error) {
     res.json({
         message: "error"+error,
     })
    }
 }

 exports.updateCategoryData = async (req, res) => {
    try {
     const resutl = await category.findByIdAndUpdate(req.params.id,req.body,{new:true})
     res.json({
         message: "update Data",
         success: true,
         data:resutl
     })
    } catch (error) {
     res.json({
         message: "error"+error,
     })
    } 
 }
  