import { Request, Response } from 'express';
import UserAddressRepository from '../repositories/Address/UserAddressRepository';
import CreateUserAddressService from '../services/CreateUserAddressService';

class UserAddressController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      user_uuid,
      logradouro,
      numero,
      bairro,
      cidade,
      cep,
      estado,
      complemento,
    } = request.body;

    const userAddressRepository = new UserAddressRepository();
    const createUserAddress = new CreateUserAddressService(
      userAddressRepository,
    );

    const userAddress = await createUserAddress.execute({
      user_uuid,
      logradouro,
      numero,
      bairro,
      cidade,
      cep,
      estado,
      complemento,
    });

    return response.json(userAddress);
  }
}

export default UserAddressController;
