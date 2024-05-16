import multer from "multer"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + "_" + file.originalname)
  }
})
const upload = multer({
  storage: storage, limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedExtensions = ['png', 'jpg', 'jpeg','pdf','xlsx','mp4'];
    const fileExtension = file.originalname.split('.').pop().toLowerCase();
    if (allowedExtensions.includes(fileExtension)) {
      cb(null, true);
    } else {
      cb('Wrong file type', false);
    }
  }
})


export default upload

