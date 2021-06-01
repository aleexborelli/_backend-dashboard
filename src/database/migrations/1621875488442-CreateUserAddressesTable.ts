import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUserAddressesTable1621875488442
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_address',
        columns: [
          {
            name: 'id',
            type: 'integer',
            generationStrategy: 'increment',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'logradouro',
            type: 'varchar',
          },
          {
            name: 'numero',
            type: 'varchar',
          },
          {
            name: 'bairro',
            type: 'varchar',
          },
          {
            name: 'cep',
            type: 'integer',
          },
          {
            name: 'cidade',
            type: 'varchar',
          },
          {
            name: 'estado',
            type: 'varchar',
          },
          {
            name: 'complemento',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'ind_ativo',
            type: 'boolean',
            default: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_address');
  }
}
