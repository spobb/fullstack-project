import express from 'express';
import contactRouter from '../resources/contact/contact.routes.js';
import { logger } from '../middlewares/logger.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use('/api/contacts', contactRouter);

// handle not found
app.all(/(.*)/, (req, res) => {
    res.status(404).send('Not Found!');
});

export default app;