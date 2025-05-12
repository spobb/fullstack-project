import { verifyToken } from '#auth/auth.service.js';
import { ClientError } from '#errors';
import { User } from '#models';

export const authorize = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            throw new ClientError('Unauthorized', 401);
        }

        const decoded = await verifyToken(token);
        if (!decoded) {
            throw new ClientError('Forbidden', 403);
        }
        const user = await User.findById(decoded.userId);
        req.user = user;
        next();
    } catch (err) {
        next(err);
    }
}