import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateExerciseDiaryColumns1785540753195 implements MigrationInterface {
    name = 'UpdateExerciseDiaryColumns1785540753195'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_diary" DROP COLUMN "start_time"`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" DROP COLUMN "end_time"`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" ADD "date_entered" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" ADD CONSTRAINT "UQ_cb6ad595210569a17c7f380ba7b" UNIQUE ("date_entered")`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" ALTER COLUMN "notes" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_diary" ALTER COLUMN "notes" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" DROP CONSTRAINT "UQ_cb6ad595210569a17c7f380ba7b"`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" DROP COLUMN "date_entered"`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" ADD "created_at" TIMESTAMP WITH TIME ZONE DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" ADD "end_time" date`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" ADD "start_time" date`);
    }

}
