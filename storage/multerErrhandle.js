import multer from "multer";
import { errRes } from "../utils/customError.js";

const multerErrorHandler = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json(errRes("File too large",400));
      }
    } else if (err) {
      return res.status(500).json(errRes("File upload failed"));
    }
    next();
  };

  export default multerErrorHandler 