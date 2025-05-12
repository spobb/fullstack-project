import { Router } from 'express';
import ContactController from './contact.controller.js';

import { allowMethods, authorize, multerParser } from '#middlewares';
import upload from '#config/multer.config.js';

const router = Router();

router.route('/').all(allowMethods(['GET', 'POST']))
    .get(ContactController.getAll)
    .post(upload.single('avatar'), multerParser, authorize, ContactController.create);

router.route('/:id').all(allowMethods(['GET', 'PUT', 'DELETE']))
    .get(ContactController.get)
    .put(upload.single('avatar'), multerParser, authorize, ContactController.update)
    .delete(ContactController.delete);

export default router;
