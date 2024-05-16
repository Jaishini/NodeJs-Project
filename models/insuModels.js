import mongoose from "mongoose"

const { Schema } = mongoose;
const userSchema = new Schema({

    user_Insu_No: {
        type: String,
        unique:true,
        required: true
    },

    userName: {
        type: String,
        required: true
    },

    claimNo: {
        type: String,
        required: true,
    },

    insu_Issued: {
        type: Boolean,
        required: true,
        default: false
    },
    img:{
        type: [String]
    },
},
{ timestamps: true}
);

export default mongoose.model('User', userSchema)