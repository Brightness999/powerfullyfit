import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1610035260606 implements MigrationInterface {
    name = 'SchemaSync1610035260606'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "app_user"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "createTime" SET DEFAULT '"2021-01-07T16:01:00.771Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "program"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "program" ALTER COLUMN "createTime" SET DEFAULT '"2021-01-07T16:01:00.777Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "assigned_program"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "assigned_program" ALTER COLUMN "createTime" SET DEFAULT '"2021-01-07T16:01:00.777Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "organization"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "organization" ALTER COLUMN "createTime" SET DEFAULT '"2021-01-07T16:01:00.779Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organization" ALTER COLUMN "createTime" SET DEFAULT '2021-01-07 15:51:34.815'`);
        await queryRunner.query(`COMMENT ON COLUMN "organization"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "assigned_program" ALTER COLUMN "createTime" SET DEFAULT '2021-01-07 15:51:34.817'`);
        await queryRunner.query(`COMMENT ON COLUMN "assigned_program"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "program" ALTER COLUMN "createTime" SET DEFAULT '2021-01-07 15:51:34.817'`);
        await queryRunner.query(`COMMENT ON COLUMN "program"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "createTime" SET DEFAULT '2021-01-07 15:51:34.812'`);
        await queryRunner.query(`COMMENT ON COLUMN "app_user"."createTime" IS NULL`);
    }

}
