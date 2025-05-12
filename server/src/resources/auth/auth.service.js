import jwt from 'jsonwebtoken';
import 'dotenv/config';
import bcrypt from 'bcryptjs';

export const generateToken = (user) => {
    return jwt.sign(
        { userId: user._id },
        process.env.JWT_SALT,
        { expiresIn: process.env.JWT_EXPIRATION }
    );
}

export const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt()
    return await bcrypt.hash(pw, salt);
}

export const comparePassword = async (pw, hash) => {
    return await bcrypt.compare(pw, hash);
}

export const verifyToken = async (token) => {
    return jwt.verify(token, process.env.JWT_SALT);
}