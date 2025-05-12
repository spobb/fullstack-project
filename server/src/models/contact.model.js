import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: 'First name is required',
        maxLength: [64, 'First name must be less than 64 characters'],
    },
    lastName: {
        type: String,
        required: 'Last name is required',
        maxLength: [64, 'Last name must be less than 64 characters'],
    },
    email: {
        type: String,
        match: /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+.[a-zA-Z]+$/,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: 'Phone number is required'
    },
    avatar: {
        type: String,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

export const Contact = mongoose.model('Contact', contactSchema);