import { Router } from 'express';
import ContactController from './contact.controller.js';
import { allowMethods } from '../../middlewares/allow-method.middleware.js';
import { multerParser } from '../../middlewares/multer-parser.middleware.js';
import upload from '../../config/multer.config.js'

const router = Router();

router.route('/').all(allowMethods(['GET', 'POST']))
    .get(ContactController.getAll)
    .post(upload.single('avatar'), multerParser, ContactController.create);

router.route('/:id').all(allowMethods(['GET', 'PUT', 'DELETE']))
    .get(ContactController.get)
    .put(upload.single('avatar'), multerParser, ContactController.update)
    .delete(ContactController.delete);

export default router;
