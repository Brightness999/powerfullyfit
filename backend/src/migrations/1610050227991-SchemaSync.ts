import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1610050227991 implements MigrationInterface {
    name = 'SchemaSync1610050227991'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "app_user"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "createTime" SET DEFAULT '"2021-01-07T20:10:28.223Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "program"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "program" ALTER COLUMN "createTime" SET DEFAULT '"2021-01-07T20:10:28.226Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "assigned_program"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "assigned_program" ALTER COLUMN "createTime" SET DEFAULT '"2021-01-07T20:10:28.226Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "organization"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "organization" ALTER COLUMN "createTime" SET DEFAULT '"2021-01-07T20:10:28.227Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organization" ALTER COLUMN "createTime" SET DEFAULT '2021-01-07 16:01:16.372'`);
        await queryRunner.query(`COMMENT ON COLUMN "organization"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "assigned_program" ALTER COLUMN "createTime" SET DEFAULT '2021-01-07 16:01:16.376'`);
        await queryRunner.query(`COMMENT ON COLUMN "assigned_program"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "program" ALTER COLUMN "createTime" SET DEFAULT '2021-01-07 16:01:16.376'`);
        await queryRunner.query(`COMMENT ON COLUMN "program"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "createTime" SET DEFAULT '2021-01-07 16:01:16.371'`);
        await queryRunner.query(`COMMENT ON COLUMN "app_user"."createTime" IS NULL`);
    }

}
