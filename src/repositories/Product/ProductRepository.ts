import { Repository, getRepository } from 'typeorm';
import CreateProductDTO from '../../dtos/CreateProductDTO';
import Product from '../../models/Product';
import IProductRepository from './IProductRepository';

class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async findAll(): Promise<Product[]> {
    return this.ormRepository.find();
  }

  public async findById(id: number): Promise<Product> {
    return this.ormRepository.findOne(id);
  }

  public async create({
    name,
    description,
    price,
    amount,
    image,
  }: CreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create({
      name,
      description,
      price,
      amount,
      image,
    });

    await this.ormRepository.save(product);
    return product;
  }

  public async save(product: Product): Promise<Product> {
    return this.ormRepository.save(product);
  }
}

export default ProductRepository;
