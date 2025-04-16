import { readFromFile, writeToFile } from '../../services/read-write.service.js';
import 'dotenv/config.js';

const path = process.env.DATA_PATH;

class ContactController {
    constructor() { }

    async getAll(req, res, next) {
        try {
            const data = await readFromFile();
            const { contacts } = data;

            if (!contacts) {
                return res.status(404).json({ message: 'No contacts found!' });
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
                return res.status(404).json({ message: `No contact with ID ${req.params.id} found!` });
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
                return res.status(404).json({ message: `No contact with ID ${req.params.id} found!` });
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
                return res.status(404).json({ message: `No contact with ID ${req.params.id} found!` });
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