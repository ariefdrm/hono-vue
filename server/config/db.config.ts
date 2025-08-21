import { Pool } from "pg";
import "dotenv/config";

export const pool = new Pool({
  host: "localhost",
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
});

export function connect() {
  pool
    .connect()
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
}
