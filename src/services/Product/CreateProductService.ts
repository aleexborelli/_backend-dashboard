import Product from '../../models/Product';
import IProductRepository from '../../repositories/Product/IProductRepository';

interface IRequest {
  name: string;
  description: string;
  price: number;
  amount: number;
  image: string;
}

class CreateProductService {
  private productsRepository: IProductRepository;

  constructor(productsRepository: IProductRepository) {
    this.productsRepository = productsRepository;
  }

  public async execute({
    name,
    description,
    price,
    amount,
    image,
  }: IRequest): Promise<Product> {
    const product = await this.productsRepository.create({
      name,
      description,
      price,
      amount,
      image,
    });
    return product;
  }
}

export default CreateProductService;
