import express from 'express';
import contactRouter from '#contact/contact.routes.js';
import userRouter from '#user/user.routes.js';
import authRouter from '#auth/auth.route.js';

import { logger, getApiVersion, errorHandler } from '#middlewares';
import { NotFoundError } from '#errors';

const app = express();

app.use((req, res, next) => {
    res.startTime = Date.now();
    next()
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(logger({ resTime: false }));

app.use('/api', getApiVersion(process.env.API_VERSION));

app.use('/api/contacts', contactRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

// handle not found
app.all(/(.*)/, (req, res) => {
    throw new NotFoundError('Route not found');
});

app.use(errorHandler);

export default app;