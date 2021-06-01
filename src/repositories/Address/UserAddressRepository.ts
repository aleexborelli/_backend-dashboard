import { getRepository, Repository } from 'typeorm';
import CreateUserAddressDTO from '../../dtos/CreateUserAddressDTO';
import UserAddress from '../../models/UserAddress';
import IUserAddressRepository from './IUserAddressRepository';

class UserAddressRepository implements IUserAddressRepository {
  private ormRepository: Repository<UserAddress>;

  constructor() {
    this.ormRepository = getRepository(UserAddress);
  }

  public async findByUserId(
    user_uuid: string,
  ): Promise<UserAddress[] | undefined> {
    const address = await this.ormRepository.find({
      where: { user_uuid },
    });

    return address;
  }

  public async create({
    user_uuid,
    logradouro,
    numero,
    bairro,
    cidade,
    cep,
    estado,
    complemento,
  }: CreateUserAddressDTO): Promise<UserAddress | undefined> {
    const userAddress = this.ormRepository.create({
      user_uuid,
      logradouro,
      numero,
      bairro,
      cidade,
      cep,
      estado,
      complemento,
    });

    await this.ormRepository.save(userAddress);
    return userAddress;
  }

  public async save(userAddress: UserAddress): Promise<UserAddress> {
    return this.ormRepository.save(userAddress);
  }
}

export default UserAddressRepository;
