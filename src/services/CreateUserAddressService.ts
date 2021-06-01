import UserAddress from '../models/UserAddress';
import IUserAddressRepository from '../repositories/Address/IUserAddressRepository';
import UserAddressRepository from '../repositories/Address/UserAddressRepository';

interface Request {
  user_uuid: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  cep: number;
  estado: string;
  complemento?: string;
}

class CreateUserAddressService {
  private userAddressRepository: IUserAddressRepository;

  constructor(userAddressRepository: UserAddressRepository) {
    this.userAddressRepository = userAddressRepository;
  }

  public async execute({
    user_uuid,
    logradouro,
    numero,
    bairro,
    cidade,
    cep,
    estado,
    complemento,
  }: Request): Promise<UserAddress> {
    const user = await this.userAddressRepository.create({
      user_uuid,
      logradouro,
      numero,
      bairro,
      cidade,
      cep,
      estado,
      complemento,
    });

    return user;
  }
}

export default CreateUserAddressService;
