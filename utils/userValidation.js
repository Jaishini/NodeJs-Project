import user from "./userSchema.js"

export const userValidation = async(req,res,next) =>{
    const payload= await user.validate(req.body)
    if(payload.error){
        res.json({
            success: 0,
            message: payload.error.details[0].message
        })
    }
    else{
        next();
    }
}