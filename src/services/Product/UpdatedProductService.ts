import { Repository } from 'typeorm';
import AppError from '../../errors/AppError';
import Product from '../../models/Product';
import IProductRepository from '../../repositories/Product/IProductRepository';

interface IRequest {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;
  image: string;
}

class UpdateProductService {
  private productsRepository: IProductRepository;

  constructor(productsRepository: IProductRepository) {
    this.productsRepository = productsRepository;
  }

  public async execute({
    id,
    name,
    description,
    price,
    amount,
    image,
  }: IRequest): Promise<Product> {
    const product = await this.productsRepository.findById(Number(id));

    if (!product) {
      throw new AppError('Product not found', 400);
    }

    product.name = name;
    product.description = description;
    product.price = price;
    product.amount = amount;
    product.image = image;

    await this.productsRepository.save(product);

    return product;
  }
}

export default UpdateProductService;
