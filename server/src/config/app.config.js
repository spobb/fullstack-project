import express from 'express';
import contactRouter from '#contact/contact.routes.js';
import { logger, getApiVersion, errorHandler } from '#middlewares';
import { ClientError } from '#errors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(logger);

app.use('/api', getApiVersion(process.env.API_VERSION));

app.use('/api/contacts', contactRouter);

// handle not found
app.all(/(.*)/, (req, res) => {
    throw new ClientError('Not found', 404)
});

app.use(errorHandler);

export default app;