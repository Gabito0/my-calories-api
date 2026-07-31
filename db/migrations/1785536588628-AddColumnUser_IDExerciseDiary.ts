import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnUserIDExerciseDiary1785536588628 implements MigrationInterface {
    name = 'AddColumnUserIDExerciseDiary1785536588628'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_diary" DROP CONSTRAINT "FK_8bff0d26bde35c5d065406c5438"`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" ALTER COLUMN "user_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" ADD CONSTRAINT "FK_8bff0d26bde35c5d065406c5438" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_diary" DROP CONSTRAINT "FK_8bff0d26bde35c5d065406c5438"`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" ALTER COLUMN "user_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" ADD CONSTRAINT "FK_8bff0d26bde35c5d065406c5438" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
