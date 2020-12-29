import { MigrationInterface, QueryRunner } from 'typeorm';

export class SuperAdminInsertion1609216506317 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO app_user (firstname, lastname, password, role, type) values ('Admin', 'Parabeac', '12345', 'SUPER ADMIN'::APP_USER_ROLE_ENUM, 'coach')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
