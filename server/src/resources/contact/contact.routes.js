import { Router } from 'express';
import ContactController from './contact.controller.js';

import { allowMethods, authorize, multerParser } from '#middlewares';
import upload from '#config/multer.config.js';

const router = Router();

router.route('/').all(allowMethods(['GET', 'POST']))
    .get(ContactController.getAll)
    .post(authorize, upload.single('avatar'), multerParser, ContactController.create);

router.route('/:id').all(allowMethods(['GET', 'PUT', 'DELETE']))
    .get(ContactController.get)
    .put(authorize, upload.single('avatar'), multerParser, ContactController.update)
    .delete(ContactController.delete);

export default router;
