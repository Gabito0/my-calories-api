import { DataSource, DataSourceOptions } from "typeorm";
import {config} from "dotenv"
import { ConfigService } from "@nestjs/config";

config();
const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities:['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/db/migrations/*{.ts,.js}'],
  migrationsTableName:'migrations',
  migrationsRun: false,
  synchronize: false,
  logging: process.env.ENV != 'production',
  extra:{
    connectionLimit: 10,
  }
};

const datasource = new DataSource(dataSourceOptions);

export default datasource;