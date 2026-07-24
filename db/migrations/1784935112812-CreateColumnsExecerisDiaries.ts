import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateColumnsExecerisDiaries1784935112812 implements MigrationInterface {
    name = 'CreateColumnsExecerisDiaries1784935112812'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "exercise_diary" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "start_time" date NOT NULL, "end_time" date NOT NULL, "notes" text NOT NULL, "user_id" uuid, CONSTRAINT "PK_2dc01f0ef5593ef37296e1fca55" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "exercise_diary" ADD CONSTRAINT "FK_8bff0d26bde35c5d065406c5438" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_diary" DROP CONSTRAINT "FK_8bff0d26bde35c5d065406c5438"`);
        await queryRunner.query(`DROP TABLE "exercise_diary"`);
    }

}
