import pool from "../config/db.config";
import { createMiddleware } from "hono/factory";

export const validateToken = createMiddleware(async (c, next) => {
  const token = c.req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return c.json({ message: "No token provided" }, 401);

  const result = await pool.query("SELECT * FROM USERS WHERE token = $1", [
    token,
  ]);

  const users = result.rows[0];
  if (!users) return c.json({ message: "You don't have access" }, 401);

  c.set("user", users);
  await next();
});
