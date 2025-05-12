import mongoose from 'mongoose';
import 'dotenv/config';
import { hashPassword } from '#auth/auth.service.js';
import { Role } from '#auth/enums/role.enum.js';
import { Contact } from '#models';

const userSchema = mongoose.Schema({
    email: {
        type: String,
        match: /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+.[a-zA-Z]+$/,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: Object.values(Role),
        default: 'user'
    },
});

userSchema.pre('save', async function (next) {
    this.password = await hashPassword(this.password);
    next();
})

export const User = mongoose.model('User', userSchema);