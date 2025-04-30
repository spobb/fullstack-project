import { Router } from 'express';
import UserController from './user.controller.js';
import { authorize, allowMethods, allowRoles } from '#middlewares';
import { Role } from '#auth/enums/role.enum.js';

const router = Router();

router.route('/').all(allowMethods(['GET']), authorize, allowRoles([Role.ADMIN]))
    .get(UserController.getAll)

router.route('/:id').all(allowMethods(['GET', 'PUT', 'DELETE']), authorize)
    .get(UserController.get)
    .put(UserController.update)
    .delete(UserController.delete);

export default router;
