
const signup = require("../model/signup")
const bcrypt = require("bcryptjs")
exports.signupUser = async (req, res) => {
    let {password} = req.body
    const salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password,salt)
    try {
        const result = await signup.create({
            name: req.body.name,
            email: req.body.email,
            password
        })
        res.json({
            message: "add Data",
            success: true,
            data: result,
        }) 
    } catch (error) {    
        res.json({
            message: "error"+error,
        })
    }
}

exports.updateProfile=async(req,res)=>{
    try {
         
        const resutl = await signup.findByIdAndUpdate(req.params.id,{ 
            name: req.body.name,
            email: req.body.email,
             },{new:true})
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

exports.getSingleUsers = async(req,res) => {
    try {
     const result = await signup.findById(req.params.id)
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