import { ClientError } from '#errors';
import 'dotenv/config.js';
import { User } from '#models';

class UserController {
    constructor() { }

    async getAll(req, res, next) {
        try {
            const { search = '', orderBy, limit } = req.query;
            const users = await User.find({
                $or: [
                    { firstName: { $regex: search } },
                    { lastName: { $regex: search } },
                    { email: { $regex: search } }
                ]
            })
                .select('-password')
                .limit(limit)
                .sort({ [orderBy]: 'asc' });

            if (!users) {
                throw new ClientError('No users found', 404);
            };

            return res.status(200).json(users);
        } catch (err) {
            next(err);
        }
    };

    async get(req, res, next) {
        try {
            const user = await User.find({ _id: req.params.id })
                .select('-password');

            if (!user) {
                throw new ClientError(`No user with ID ${req.params.id} found!`, 404);
            };

            return res.status(200).json(user);
        } catch (err) {
            next(err);
        }
    };

    async update(req, res, next) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
                .select('-password');

            if (!user) {
                throw new ClientError(`No user with ID ${req.params.id} found!`, 404);
            }

            return res.status(200).json(user);
        } catch (err) {
            next(err);
        }
    };
    async delete(req, res, next) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);

            if (!user) {
                throw new ClientError(`No user with ID ${req.params.id} found!`, 404);
            }

            return res.status(200).json(user);
        } catch (err) {
            next(err);
        }
    };
};

const userController = new UserController();

export default userController;