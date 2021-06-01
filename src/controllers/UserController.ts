import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import UserRepository from '../repositories/User/UserRepository';
import EnableUserService from '../services/EnableUserService';

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const userRepository = new UserRepository();
    const createUser = new CreateUserService(userRepository);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  }

  public async enable(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const userRepository = new UserRepository();
    const enableUser = new EnableUserService(userRepository);

    const user = await enableUser.execute({
      id,
    });

    delete user.password;

    return response.json(user);
  }
}

export default UserController;
