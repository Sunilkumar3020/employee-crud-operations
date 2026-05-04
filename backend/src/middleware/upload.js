import multer from "multer";
import cloudinary from "../utils/cloudinary.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "./uploads")
//     },
//     filename: function (req, file, cb) {
//         const uniqueName = Date.now() + '-' + file.originalname;
//         cb(null, uniqueName)
//     }
// })

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "employees",
        allowed_formats: ["jpg", "png", "jpeg"]
    }
})


const upload = multer({ storage })

export default upload;