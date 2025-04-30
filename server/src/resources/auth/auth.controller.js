import 'dotenv/config.js';
import { User } from '#models';
import { generateToken, comparePassword } from './auth.service.js';
import { ClientError, UnauthorizedError } from '#errors';

class AuthController {
    constructor() { }

    async register(req, res, next) {
        try {
            const user = new User({ ...req.body })
            await user.save();

            const token = generateToken(user);

            return res.status(201).json({ data: user, token });
        } catch (err) {
            next(err);
        }
    }

    async login(req, res, next) {
        try {
            const user = await User.findOne({ email: req.body.email }).exec();
            const credentials = await comparePassword(req.body.password, user.password);
            if (!credentials) {
                throw new UnauthorizedError('Invalid credentials');
            }

            const token = generateToken(user);
            return res.status(201).json({ data: user, token });
        } catch (err) {
            next(err);
        }
    }

    async me(req, res, next) {
        try {
            console.log(req.user);
            const user = await User.findById(req.user._id);
            res.status(200).json({ data: user });
        } catch (err) {
            next(err);
        }
    }
};

const authController = new AuthController();

export default authController;