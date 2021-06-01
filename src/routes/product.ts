import { Router } from 'express';
import authenticate from '../middlewares/auth';
import ProductsController from '../controllers/ProductController';

const productRoutes = Router();
const productController = new ProductsController();

// productRoutes.use(authenticate);

productRoutes.get('/', productController.index);
productRoutes.get('/:id', productController.show);
productRoutes.post('/', productController.create);
productRoutes.put('/:id', productController.update);

export default productRoutes;
