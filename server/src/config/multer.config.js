import { ClientError } from '#errors';
import multer from 'multer';

const fileFilter = (req, file, cb) => {
    const allowed = /jpeg|jpg|png/;
    if (allowed.test(file.mimetype)) return cb(null, true)
    return cb(new ClientError('Invalid file type'));
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/')
    },
    filename: (req, file, cb) => {
        const suffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + suffix);
    }
})

const upload = multer({ storage: storage, fileFilter: fileFilter });

export default upload;