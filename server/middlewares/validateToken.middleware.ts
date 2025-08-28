import { Context, Next } from "hono";
import pool from "../config/db.config";

export async function validateToken(c: Context, next: Next) {
  const token = c.req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return c.json({ message: "No token provided" }, 401);

  const result = await pool.query("SELECT * FROM USERS WHERE token = $1", [
    token,
  ]);

  const users = result.rows[0];
  if (!users) return c.json({ message: "Invalid token" }, 401);

  c.set("user", users);
  await next();
}
