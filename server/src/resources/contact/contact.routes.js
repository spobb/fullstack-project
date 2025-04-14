import { Router } from 'express';
import ContactController from './contact.controller.js';

const router = Router();

router.route('/')
    .get(ContactController.getAll)
    .post(ContactController.create);

router.route('/:id')
    .get(ContactController.get)
    .put(ContactController.update)
    .delete(ContactController.delete);

export default router;
