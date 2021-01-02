import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1609621738680 implements MigrationInterface {
    name = 'SchemaSync1609621738680'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "app_user_role_enum" AS ENUM('ASSISTANT', 'MANAGER', 'HEAD', 'SUPER ADMIN')`);
        await queryRunner.query(`CREATE TABLE "app_user" ("id" SERIAL NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "password" character varying NOT NULL, "createTime" TIMESTAMP NOT NULL DEFAULT '"2021-01-02T21:08:58.898Z"', "role" "app_user_role_enum", "type" character varying NOT NULL, "coachId" integer, "organizationId" integer, CONSTRAINT "PK_22a5c4a3d9b2fb8e4e73fc4ada1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a216cab9b4f72da1e4e6fdc4c0" ON "app_user" ("type") `);
        await queryRunner.query(`CREATE TABLE "program" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createTime" TIMESTAMP NOT NULL DEFAULT '"2021-01-02T21:08:58.901Z"', "coachId" integer, CONSTRAINT "PK_3bade5945afbafefdd26a3a29fb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "assigned_program" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createTime" TIMESTAMP NOT NULL DEFAULT '"2021-01-02T21:08:58.901Z"', "status" character varying NOT NULL, "coachId" integer, "assignedClientId" integer, "programId" integer, CONSTRAINT "PK_cead1cf5fedde99fc6e04ae0c9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "organization" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createTime" TIMESTAMP NOT NULL DEFAULT '"2021-01-02T21:08:58.902Z"', CONSTRAINT "PK_472c1f99a32def1b0abb219cd67" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "app_user" ADD CONSTRAINT "FK_d1c99dd0535c5dd113d02ac0e99" FOREIGN KEY ("coachId") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_user" ADD CONSTRAINT "FK_f0378161891caa3b5d8365fa445" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "program" ADD CONSTRAINT "FK_f3da3fbdc7189fd3c3765761f04" FOREIGN KEY ("coachId") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assigned_program" ADD CONSTRAINT "FK_33682448e92dc3e412c95d63eaa" FOREIGN KEY ("coachId") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assigned_program" ADD CONSTRAINT "FK_e2c6881ab9dde3c25a64123ec19" FOREIGN KEY ("assignedClientId") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assigned_program" ADD CONSTRAINT "FK_bb2d61f3f2a6bd3a9589c472bc9" FOREIGN KEY ("programId") REFERENCES "program"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assigned_program" DROP CONSTRAINT "FK_bb2d61f3f2a6bd3a9589c472bc9"`);
        await queryRunner.query(`ALTER TABLE "assigned_program" DROP CONSTRAINT "FK_e2c6881ab9dde3c25a64123ec19"`);
        await queryRunner.query(`ALTER TABLE "assigned_program" DROP CONSTRAINT "FK_33682448e92dc3e412c95d63eaa"`);
        await queryRunner.query(`ALTER TABLE "program" DROP CONSTRAINT "FK_f3da3fbdc7189fd3c3765761f04"`);
        await queryRunner.query(`ALTER TABLE "app_user" DROP CONSTRAINT "FK_f0378161891caa3b5d8365fa445"`);
        await queryRunner.query(`ALTER TABLE "app_user" DROP CONSTRAINT "FK_d1c99dd0535c5dd113d02ac0e99"`);
        await queryRunner.query(`DROP TABLE "organization"`);
        await queryRunner.query(`DROP TABLE "assigned_program"`);
        await queryRunner.query(`DROP TABLE "program"`);
        await queryRunner.query(`DROP INDEX "IDX_a216cab9b4f72da1e4e6fdc4c0"`);
        await queryRunner.query(`DROP TABLE "app_user"`);
        await queryRunner.query(`DROP TYPE "app_user_role_enum"`);
    }

}
