import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddUserToAddress1621881508609
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM user_address');

    await queryRunner.addColumn(
      'user_address',
      new TableColumn({
        name: 'user_uuid',
        type: 'uuid',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'user_address',
      new TableForeignKey({
        name: 'AddressUser',
        columnNames: ['user_uuid'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('user_address', 'AddressUser');
    await queryRunner.dropColumn('user_address', 'user_uuid');
  }
}
