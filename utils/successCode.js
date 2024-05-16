import { CODEMSG, } from "../config/constants.js"

export const success = (code = 200,msg = null,result) => {
    return {standardResponse: { success: true, statusCode: code, messageDescription: msg ? msg : CODEMSG[code], data: result} }
}
