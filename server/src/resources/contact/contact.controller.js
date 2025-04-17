import { ClientError } from '#errors';
import { readFromFile, writeToFile } from '#services';
import 'dotenv/config.js';

class ContactController {
    constructor() { }

    async getAll(req, res, next) {
        try {
            const data = await readFromFile();
            const { contacts } = data;

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
            const data = await readFromFile();
            const { contacts } = data;

            const result = contacts.find(c => c.id == req.params.id);

            if (!result) {
                throw new ClientError(`No contact with ID ${req.params.id} found!`, 404);
            };

            return res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    };

    async create(req, res, next) {
        try {
            const data = await readFromFile();
            const { contacts } = data;

            const contact = {
                id: contacts.length ?
                    (contacts.at(-1).id + 1) : 1,
                ...req.body
            }

            contacts.push(contact);

            await writeToFile(data);
            return res.status(201).json(contact);
        } catch (err) {
            next(err);
        }
    };
    async update(req, res, next) {
        try {
            const data = await readFromFile();
            const { contacts } = data;

            const contact = contacts.find(c => c.id == req.params.id);
            if (!contact) {
                throw new ClientError(`No contact with ID ${req.params.id} found!`, 404);
            }

            Object.assign(contact, req.body);

            await writeToFile(data);
            return res.status(200).json(contact);
        } catch (err) {
            next(err);
        }
    };
    async delete(req, res, next) {
        try {
            const data = await readFromFile();
            const { contacts } = data;

            const index = contacts.findIndex(c => c.id == req.params.id);
            if (index == -1) {
                throw new ClientError(`No contact with ID ${req.params.id} found!`, 404);
            }

            contacts.splice(index, 1);

            await writeToFile(data);
            return res.status(204).send();
        } catch (err) {
            next(err);
        }
    };
};

const contactController = new ContactController();

export default contactController;