import express from 'express';
import contactRouter from '../resources/contact/contact.routes.js';
import { logger } from '../middlewares/logger.middleware.js';
import { apiVersion } from '../middlewares/accept-header.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(logger);

app.use('/api', apiVersion(process.env.API_VERSION));

app.use('/api/contacts', contactRouter);

// handle not found
app.all(/(.*)/, (req, res) => {
    res.status(404).json({ error: 'Not found' });
});

export default app;