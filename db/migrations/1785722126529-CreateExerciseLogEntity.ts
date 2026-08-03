import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateExerciseLogEntity1785722126529 implements MigrationInterface {
    name = 'CreateExerciseLogEntity1785722126529'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "exercise_logs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "exercise_diary_id" uuid NOT NULL, "logged_at" TIMESTAMP WITH TIME ZONE NOT NULL, "set" integer, "reps" integer, "notes" text, "weight" double precision, "time_seconds" integer, "distance" double precision, CONSTRAINT "PK_32076bf978e4169be16e25bf8dc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "exercise_logs" ADD CONSTRAINT "FK_405e4d50ab89278c83f59e691c3" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exercise_logs" ADD CONSTRAINT "FK_86a815456a1d37d94b5633dd67b" FOREIGN KEY ("exercise_diary_id") REFERENCES "exercise_diaries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_logs" DROP CONSTRAINT "FK_86a815456a1d37d94b5633dd67b"`);
        await queryRunner.query(`ALTER TABLE "exercise_logs" DROP CONSTRAINT "FK_405e4d50ab89278c83f59e691c3"`);
        await queryRunner.query(`DROP TABLE "exercise_logs"`);
    }

}
