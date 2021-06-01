import IProductsRepository from '../../repositories/Product/IProductRepository';
import Product from '../../models/Product';

class ListAllProductsService {
  private productsRepository: IProductsRepository;

  constructor(productsRepository: IProductsRepository) {
    this.productsRepository = productsRepository;
  }

  public async execute(): Promise<Product[]> {
    const products = await this.productsRepository.findAll();

    return products;
  }
}

export default ListAllProductsService;
