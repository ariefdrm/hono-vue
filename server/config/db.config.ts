import { Client } from "pg";
import "dotenv/config";

const pool = new Client({
  host: "localhost",
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
});

function connect() {
  pool
    .connect()
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
}

connect();

export default pool;
