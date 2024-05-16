import { CODEMSG } from "../config/constants.js";

class CustomError extends Error {
    code = 500;
    constructor(msg, code) {
        super(code, msg)
        this.code = code
        this.msg = msg
    }
}

export default CustomError


export const errRes = (msg = null, code = 500, more = null) => {
    if (typeof (more) == 'string') more = { message: more }
    return { ...more, standardResponse: { success: false, statusCode: code, ErrorDescription: msg ? msg : CODEMSG[code] } }
}


