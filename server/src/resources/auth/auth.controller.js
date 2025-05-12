import 'dotenv/config.js';
import { Contact, User } from '#models';
import { generateToken, comparePassword } from './auth.service.js';
import { ClientError, NotFoundError, UnauthorizedError } from '#errors';

class AuthController {
    constructor() { }

    async register(req, res, next) {
        try {
            const user = new User({ ...req.body })
            await user.save();

            const token = generateToken(user);

            delete user._doc.password;
            return res.status(201).json({ data: user, token });
        } catch (err) {
            next(err);
        }
    }

    async login(req, res, next) {
        try {
            const user = await User.findOne({ email: req.body.email }).exec();
            if (!user) {
                throw new UnauthorizedError('Invalid credentials');
            }

            const credentials = await comparePassword(req.body.password, user.password);
            if (!credentials) {
                throw new UnauthorizedError('Invalid credentials');
            }

            const token = generateToken(user);
            return res.status(201).json({ data: user._id, token });
        } catch (err) {
            next(err);
        }
    }

    async me(req, res, next) {
        try {
            const user = await User.findById(req.user._id).select('email role');
            const contact = await Contact.findOne({ owner: user }).select('-__v -owner');

            res.status(200).json({ user: user, contact: contact });
        } catch (err) {
            next(err);
        }
    }
};

const authController = new AuthController();

export default authController;