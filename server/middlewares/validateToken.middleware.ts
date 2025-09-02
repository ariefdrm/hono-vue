import { Context, Next } from "hono";
import pool from "../config/db.config";
import { verify } from "hono/jwt";

export async function validateToken(c: Context, next: Next) {
  const token = c.req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return c.json({ message: "No token provided" }, 401);

  const result = await pool.query("SELECT * FROM USERS WHERE token = $1", [
    token,
  ]);

  const users = result.rows[0];
  if (!users) return c.json({ message: "You don't have access" }, 401);

  c.set("user", users);
  await next();
}

export async function validateJwtToken(c: Context, next: Next) {
  const token = c.req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return c.json({ message: "No token provided" }, 401);

  const signedJwt = await verify(token, "secret");

  c.set("user", signedJwt);
  await next();
}
