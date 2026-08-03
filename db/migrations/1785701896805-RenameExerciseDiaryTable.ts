import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameExerciseDiaryTable1785701896805 implements MigrationInterface {
    name = 'RenameExerciseDiaryTable1785701896805'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "exercise_diaries" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "date_entered" date NOT NULL, "notes" text NOT NULL, CONSTRAINT "UQ_7a52b7f70bcb0a07b5b9f777e8a" UNIQUE ("date_entered"), CONSTRAINT "PK_d08ed08464d53d0997531e33eab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "exercise_diaries" ADD CONSTRAINT "FK_1ca407e0793c6d384911ce894a9" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_diaries" DROP CONSTRAINT "FK_1ca407e0793c6d384911ce894a9"`);
        await queryRunner.query(`DROP TABLE "exercise_diaries"`);
    }

}
