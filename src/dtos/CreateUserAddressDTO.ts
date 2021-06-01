export default interface CreateUserAddressDTO {
  user_uuid: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  cep: number;
  estado: string;
  complemento?: string;
}
