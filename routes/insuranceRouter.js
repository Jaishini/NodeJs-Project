import express from "express";
import { getUserCtrl, postUserCtrl, getByNumUserCtrl, updateUserCtrl, deleteUserCtrl } from "../controller/insController.js";
import { userValidation } from "../utils/userValidation.js";
import verifyToken from "../utils/jwtVerification.js";
import upload from "../storage/multer.js";
import multerErrorHandler from '../storage/multerErrhandle.js';

const router = express.Router()

router.get('/', verifyToken, getUserCtrl)
router.post('/', verifyToken, upload.array('image[]'), multerErrorHandler, userValidation, postUserCtrl)
router.get('/:user_Insu_No', verifyToken, getByNumUserCtrl)
router.put('/:user_Insu_No', verifyToken, updateUserCtrl)
router.delete('/:user_Insu_No', verifyToken, deleteUserCtrl)

export default router