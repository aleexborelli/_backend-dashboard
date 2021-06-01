import AppError from '../../errors/AppError';
import IProductsRepository from '../../repositories/Product/IProductRepository';
import Product from '../../models/Product';

class ShowProductService {
  private productsRepository: IProductsRepository;

  constructor(productsRepository: IProductsRepository) {
    this.productsRepository = productsRepository;
  }

  public async execute(id: number): Promise<Product> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppError('Product not found', 400);
    }

    return product;
  }
}

export default ShowProductService;
