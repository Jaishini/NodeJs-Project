import { Router } from 'express'
import { getTokenCtrl } from '../controller/tokenCtrl.js'

const router = Router()

router.get('/get', getTokenCtrl)

export default router