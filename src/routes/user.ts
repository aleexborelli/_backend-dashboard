import { Router } from 'express';
import UserAddressController from '../controllers/UserAddressController';
import UserController from '../controllers/UserController';
import authenticate from '../middlewares/auth';

const userRoutes = Router();
const userController = new UserController();
const userAddressController = new UserAddressController();

userRoutes.post('/', userController.create);
userRoutes.post('/address', userAddressController.create);
userRoutes.patch('/:id', authenticate, userController.enable);

export default userRoutes;
