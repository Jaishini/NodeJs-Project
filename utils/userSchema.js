import Joi from "joi";

const validation = Joi.object({
    user_Insu_No: Joi.string().min(5).max(10).required(),
    userName: Joi.string().alphanum().min(3).max(50).trim().required(),
    claimNo: Joi.string().min(4).max(6).required(),
    insu_Issued: Joi.boolean().default(false)
})


export default validation