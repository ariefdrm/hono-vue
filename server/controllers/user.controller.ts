import { Context } from "hono";
import { pool } from "../config/db.config";

export async function getAllUsers(c: Context) {
  const query = `SELECT * FROM get_all_users`;

  const res = await pool.query(query);

  return c.json(res.rows);
}
