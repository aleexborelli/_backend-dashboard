import CreateProductDTO from '../../dtos/CreateProductDTO';
import Product from '../../models/Product';

export default interface IProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: number): Promise<Product | undefined>;

  create(createProductDTO: CreateProductDTO): Promise<Product>;

  save(product: Product): Promise<Product>;
}
