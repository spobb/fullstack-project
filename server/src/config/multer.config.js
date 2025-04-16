import multer from 'multer';

const fileFilter = (req, file, cb) => {
    const allowed = /jpeg|jpg|png/;
    if (allowed.test(file.mimetype)) return cb(null, true)
    return cb('Error: invalid file type');
}

const upload = multer({ dest: 'public/uploads/', fileFilter: fileFilter });

export default upload;