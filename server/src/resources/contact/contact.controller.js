class ContactController {
    constructor() { }

    async getAll(req, res) {
        res.status(200).send('got all!');
    };
    async get(req, res) {
    };
    async create(req, res) { };
    async update(req, res) { };
    async delete(req, res) { };
};

const contactController = new ContactController();

export default contactController;