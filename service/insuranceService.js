import insuModels from "../models/insuModels.js"
import CustomError from "../utils/customError.js"

export const getInsSrv = async (req, res) => {
    try {
        const result = await insuModels.find()
        return result
    } catch (err) {
        throw new CustomError(err.msg)
    }
}

export const postInsSrv = async (req, res) => {
    const user = new insuModels({
        user_Insu_No: req.body.user_Insu_No,
        userName: req.body.userName,
        claimNo: req.body.claimNo,
        insu_Issued: req.body.insu_Issued
    })
    if (req.files && req.files.length > 0) {
        let paths = [];
        req.files.forEach(file => {
            paths.push(file.path);
        });
        user.img = paths;
    }
    try {
        const result = await user.save()
        return result
    } catch (err) {
        throw new CustomError(err.msg)
    }
}

export const getByNumInsSrv = async (req, res) => {
    try {
        const result = await insuModels.findOne({ user_Insu_No: req.params.user_Insu_No })
        return result
    } catch (err) {
        throw new CustomError(err.msg)
    }
}

export const updateInsSrv = async (req, res) => {
    try {
        const filter = { user_Insu_No: req.params.user_Insu_No };
        const update = req.body;
        const result = await insuModels.findOneAndUpdate(filter, update, { new: true });
        return result
    } catch (err) {
        throw new CustomError(err.msg)
    }
}

export const deleteInsSrv = async (req, res) => {
    try {
        const result = await insuModels.findOneAndDelete({ user_Insu_No: req.params.user_Insu_No })
        return result
    } catch (err) {
        throw new CustomError(err.msg)
    }
}
