import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1610406730657 implements MigrationInterface {
    name = 'SchemaSync1610406730657'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "message" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "createTime" TIMESTAMP NOT NULL DEFAULT '"2021-01-11T23:12:10.800Z"', "toId" integer, "fromId" integer, CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "program_workouts_workout" ("programId" integer NOT NULL, "workoutId" integer NOT NULL, CONSTRAINT "PK_2eb37d167e532e23ee6f8927326" PRIMARY KEY ("programId", "workoutId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b20934f0df168421aae1d6036f" ON "program_workouts_workout" ("programId") `);
        await queryRunner.query(`CREATE INDEX "IDX_45a5cf98bf1832ca947581ef33" ON "program_workouts_workout" ("workoutId") `);
        await queryRunner.query(`CREATE TABLE "assigned_program_workouts_workout" ("assignedProgramId" integer NOT NULL, "workoutId" integer NOT NULL, CONSTRAINT "PK_01a1057decc726f89bed26a39e1" PRIMARY KEY ("assignedProgramId", "workoutId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ceb107730ba039886ea29d1598" ON "assigned_program_workouts_workout" ("assignedProgramId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4a57e7034ad95298311beb3c8b" ON "assigned_program_workouts_workout" ("workoutId") `);
        await queryRunner.query(`COMMENT ON COLUMN "app_user"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "createTime" SET DEFAULT '"2021-01-11T23:12:10.800Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "workout"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "workout" ALTER COLUMN "createTime" SET DEFAULT '"2021-01-11T23:12:10.808Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "program"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "program" ALTER COLUMN "createTime" SET DEFAULT '"2021-01-11T23:12:10.808Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "assigned_program"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "assigned_program" ALTER COLUMN "createTime" SET DEFAULT '"2021-01-11T23:12:10.808Z"'`);
        await queryRunner.query(`COMMENT ON COLUMN "organization"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "organization" ALTER COLUMN "createTime" SET DEFAULT '"2021-01-11T23:12:10.809Z"'`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_69b470efb1b19aca6e781214490" FOREIGN KEY ("toId") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_776000050f42ddb61d3c628ff16" FOREIGN KEY ("fromId") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "program_workouts_workout" ADD CONSTRAINT "FK_b20934f0df168421aae1d6036fb" FOREIGN KEY ("programId") REFERENCES "program"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "program_workouts_workout" ADD CONSTRAINT "FK_45a5cf98bf1832ca947581ef332" FOREIGN KEY ("workoutId") REFERENCES "workout"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assigned_program_workouts_workout" ADD CONSTRAINT "FK_ceb107730ba039886ea29d15987" FOREIGN KEY ("assignedProgramId") REFERENCES "assigned_program"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assigned_program_workouts_workout" ADD CONSTRAINT "FK_4a57e7034ad95298311beb3c8b0" FOREIGN KEY ("workoutId") REFERENCES "workout"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assigned_program_workouts_workout" DROP CONSTRAINT "FK_4a57e7034ad95298311beb3c8b0"`);
        await queryRunner.query(`ALTER TABLE "assigned_program_workouts_workout" DROP CONSTRAINT "FK_ceb107730ba039886ea29d15987"`);
        await queryRunner.query(`ALTER TABLE "program_workouts_workout" DROP CONSTRAINT "FK_45a5cf98bf1832ca947581ef332"`);
        await queryRunner.query(`ALTER TABLE "program_workouts_workout" DROP CONSTRAINT "FK_b20934f0df168421aae1d6036fb"`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_776000050f42ddb61d3c628ff16"`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_69b470efb1b19aca6e781214490"`);
        await queryRunner.query(`ALTER TABLE "organization" ALTER COLUMN "createTime" SET DEFAULT '2021-01-08 22:51:23.732'`);
        await queryRunner.query(`COMMENT ON COLUMN "organization"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "assigned_program" ALTER COLUMN "createTime" SET DEFAULT '2021-01-08 22:51:23.733'`);
        await queryRunner.query(`COMMENT ON COLUMN "assigned_program"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "program" ALTER COLUMN "createTime" SET DEFAULT '2021-01-08 22:51:23.733'`);
        await queryRunner.query(`COMMENT ON COLUMN "program"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "workout" ALTER COLUMN "createTime" SET DEFAULT '2021-01-08 22:51:23.734'`);
        await queryRunner.query(`COMMENT ON COLUMN "workout"."createTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "createTime" SET DEFAULT '2021-01-08 22:51:23.73'`);
        await queryRunner.query(`COMMENT ON COLUMN "app_user"."createTime" IS NULL`);
        await queryRunner.query(`DROP INDEX "IDX_4a57e7034ad95298311beb3c8b"`);
        await queryRunner.query(`DROP INDEX "IDX_ceb107730ba039886ea29d1598"`);
        await queryRunner.query(`DROP TABLE "assigned_program_workouts_workout"`);
        await queryRunner.query(`DROP INDEX "IDX_45a5cf98bf1832ca947581ef33"`);
        await queryRunner.query(`DROP INDEX "IDX_b20934f0df168421aae1d6036f"`);
        await queryRunner.query(`DROP TABLE "program_workouts_workout"`);
        await queryRunner.query(`DROP TABLE "message"`);
    }

}
