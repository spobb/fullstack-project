export const multerParser = (req, res, next) => {
    req.body = { ...req.body, avatar: req.file.filename }
    return next();
}