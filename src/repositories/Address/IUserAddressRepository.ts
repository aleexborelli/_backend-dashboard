import CreateUserAddressDTO from '../../dtos/CreateUserAddressDTO';
import UserAddress from '../../models/UserAddress';

export default interface IUserAddressRepository {
  findByUserId(user_uuid: string): Promise<UserAddress[] | undefined>;
  create(
    createUserAddressDTO: CreateUserAddressDTO,
  ): Promise<UserAddress | undefined>;
  save(userAddress: UserAddress): Promise<UserAddress>;
}
