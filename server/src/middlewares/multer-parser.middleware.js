export const multerParser = (req, res, next) => {
    req.body = { ...JSON.parse(req.body.fields), avatar: { ...req.file } }
    next();
}