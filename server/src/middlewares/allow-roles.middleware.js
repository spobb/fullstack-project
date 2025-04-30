import { ClientError } from "#errors";

export const allowRoles = (roles = ['user']) => (req, res, next) => {
    try {
        if (!roles.includes(req.user.role)) {
            throw new ClientError('Forbidden', 403);
        }
        next();
    } catch (err) {
        next(err);
    }
}