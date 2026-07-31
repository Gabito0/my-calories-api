import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeColumnNamesExerciseDiarysAndUser1784939251734 implements MigrationInterface {
  name = 'ChangeColumnNamesExerciseDiarysAndUser1784939251734'

  public async up(queryRunner: QueryRunner): Promise<void> {
    // columns already exist, nothing to do
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "exercise_diary" DROP COLUMN "notes"`);
    await queryRunner.query(`ALTER TABLE "exercise_diary" DROP COLUMN "end_time"`);
    await queryRunner.query(`ALTER TABLE "exercise_diary" DROP COLUMN "start_time"`);
  }
}