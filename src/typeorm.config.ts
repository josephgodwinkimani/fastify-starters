import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [User],
});

export default AppDataSource;
