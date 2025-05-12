import { ClientError } from '#errors';
import 'dotenv/config.js';
import { Contact } from '#models';

class ContactController {
    constructor() { }

    async getAll(req, res, next) {
        try {
            const contacts = await Contact.find({});

            if (!contacts) {
                throw new ClientError('No contacts found', 404);
            };

            return res.status(200).json(contacts);
        } catch (err) {
            next(err);
        }
    };

    async get(req, res, next) {
        try {
            const contact = await Contact.find({ _id: req.params.id });
            console.log(req.params.id)

            if (!contact) {
                throw new ClientError(`No contact with ID ${req.params.id} found!`, 404);
            };

            return res.status(200).json(contact);
        } catch (err) {
            next(err);
        }
    };

    async create(req, res, next) {
        try {
            const contact = new Contact({ ...req.body, email: req.user.email, owner: req.user._id });
            await contact.save();

            return res.status(201).json(contact);
        } catch (err) {
            next(err);
        }
    };
    async update(req, res, next) {
        try {
            const contact = await Contact.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });

            if (!contact) {
                throw new ClientError(`No contact with ID ${req.params.id} found!`, 404);
            }

            return res.status(200).json(contact);
        } catch (err) {
            next(err);
        }
    };
    async delete(req, res, next) {
        try {
            const contact = await Contact.findByIdAndDelete(req.params.id);

            if (!contact) {
                throw new ClientError(`No contact with ID ${req.params.id} found!`, 404);
            }

            return res.status(200).json(contact);
        } catch (err) {
            next(err);
        }
    };
};

const contactController = new ContactController();

export default contactController;