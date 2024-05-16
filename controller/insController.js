import { getInsSrv, postInsSrv, getByNumInsSrv, updateInsSrv, deleteInsSrv } from "../service/insuranceService.js"
import CustomError, { errRes } from "../utils/customError.js"
import { success }  from "../utils/successCode.js"
import { customerLogger } from "./logger.js"

export const getUserCtrl = async (req, res) => {
    try {
        const result = await getInsSrv(req)
        res.status(200).json(success(success.code, "All user details ", result))
        customerLogger.log('info', 'Successfully got list of customers')
    } catch (err) {
        console.log(err.msg)
        res.status(500).json(errRes("", err.code, err.msg))
        customerLogger.log('error', 'error in finding customers')
    }
}

export const postUserCtrl = async (req, res) => {
    try {
        const result = await postInsSrv(req)
        if(result){
        res.status(200).json(success(success.code,"User added successfully",result))
        customerLogger.log('info', 'Successfully added list of customers')
        }else {
            res.status(404).json(errRes("", err.code, err.msg))
            customerLogger.log('error', 'error in adding customers')
        }
    } catch (err) {
        res.status(500).json(errRes())
        customerLogger.log('error', 'error in adding customers')
    }
}
export const getByNumUserCtrl = async (req, res) => {
    try {
        const result = await getByNumInsSrv(req)
        if (result) {
            res.status(200).json(success(success.code,"User details by given id",result))
            customerLogger.log('info', 'Successfully got list of customer')
        }
        else {
            res.status(404).json(errRes(404))
            customerLogger.log('error', 'error in finding customers')
        }
    } catch (err) {
        res.status(500).json(errRes())
        customerLogger.log('error', 'error in finding customer')
    }
}

export const updateUserCtrl = async (req, res) => {
    try {
        const result = await updateInsSrv(req)
        if (result) {
            res.status(200).json(success(success.code,"User updated successfully",result))
            customerLogger.log('info', 'Successfully update the customer')
        }
        else {
            res.status(404).json(errRes(404))
            customerLogger.log('error', 'error in updating customers')
        }
    } catch (err) {
        res.status(500).json(errRes())
        customerLogger.log('error', 'error in updating the customer')
    }
}

export const deleteUserCtrl = async (req, res) => {
    try {
        const result = await deleteInsSrv(req)
        if (result) {
            res.status(200).json(success(success.code,"User deleted successfully",result))
            customerLogger.log('info', 'Successfully deleted a customer')
        }
        else {
            res.status(404).json(errRes(404))
            customerLogger.log('error', 'error in deleting the customers')
        }
    } catch (err) {
        res.status(500).json(errRes())
        customerLogger.log('error', 'error in deleting the customers')
    }
}


