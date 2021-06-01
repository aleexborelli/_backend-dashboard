import { Request, Response } from 'express';
import SessionService from '../services/SessionService';
import UserRepository from '../repositories/User/UserRepository';

class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const userRepository = new UserRepository();
    const createSession = new SessionService(userRepository);

    const session = await createSession.execute({
      email,
      password,
    });

    return response.json(session);
  }
}

export default SessionController;
