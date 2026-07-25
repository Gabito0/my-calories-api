import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnsToExerciseDiary1784939876151 implements MigrationInterface {
    name = 'AddColumnsToExerciseDiary1784939876151'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_diary" ADD "start_time" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" ADD "end_time" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" ADD "notes" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_diary" DROP COLUMN "notes"`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" DROP COLUMN "end_time"`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" DROP COLUMN "start_time"`);
    }

}
