import { Request, Response } from 'express';
import ProductRepository from '../repositories/Product/ProductRepository';
import CreateProductService from '../services/Product/CreateProductService';
import ListAllProductsService from '../services/Product/ListAllProductsService';
import ShowProductService from '../services/Product/ShowProductService';
import UpdateProductService from '../services/Product/UpdatedProductService';

class ProductController {
  public async index(request: Request, response: Response): Promise<Response> {
    const productRepository = new ProductRepository();
    const productService = new ListAllProductsService(productRepository);

    const products = await productService.execute();

    return response.json(products);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const productsRepository = new ProductRepository();
    const productService = new ShowProductService(productsRepository);

    const products = await productService.execute(Number(id));

    return response.json(products);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, price, amount, image } = request.body;
    const productRepository = new ProductRepository();
    const createProduct = new CreateProductService(productRepository);

    const product = await createProduct.execute({
      name,
      description,
      price,
      amount,
      image,
    });

    return response.status(201).json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, price, amount, image } = request.body;
    const productRepository = new ProductRepository();
    const updateProduct = new UpdateProductService(productRepository);

    const product = await updateProduct.execute({
      id,
      name,
      description,
      price,
      amount,
      image,
    });

    return response.json(product);
  }
}

export default ProductController;
