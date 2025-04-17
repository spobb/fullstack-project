import { errorLogger } from "#services";

export const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    errorLogger(err);
    res.status(err.statusCode || 500).json({ message: err.message || 'Internal server error' })
}