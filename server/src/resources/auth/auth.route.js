import { Router } from 'express';
import AuthController from './auth.controller.js';
import { authorize } from '#middlewares';

const router = Router();

router
    .post('/register', AuthController.register)
    .post('/login', AuthController.login)
    .get('/me', authorize, AuthController.me);

export default router;
