import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import User from './User';

@Entity('user_address')
class UserAddress {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => User, user => user.addresses)
  @JoinColumn({ name: 'user_uuid' })
  user_uuid: User;

  @Column()
  logradouro: string;

  @Column()
  numero: string;

  @Column()
  bairro: string;

  @Column()
  cep: number;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  complemento: string;

  @Column()
  ind_ativo: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default UserAddress;
