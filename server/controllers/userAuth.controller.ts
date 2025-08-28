import { Context } from "hono";
import bcrypt from "bcrypt";
import "../config/passport.config.ts.bak";
import pool from "../config/db.config.js";
import { generateToken } from "../utils/generateToken.js";
import z from "zod";

export default class UserAuthController {
  /* static async getAllUsers(c: Context) {
    const query = `SELECT * FROM get_all_users`;

    const res = await pool.query(query);

    return c.json(res.rows);
  } */

  static async registerUser(c: Context): Promise<Response> {
    const body = await c.req.parseBody();

    const schema = z.object({
      email: z.email(),
      password: z.string().min(5),
    });

    const parsed = schema.safeParse(body);
    if (!parsed.success) return c.json({ error: parsed.error });

    const { email, password } = parsed.data;

    // hashing password before storing in DB
    const hashed = await bcrypt.hash(password, 10);

    try {
      const result = await pool.query(
        "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email",
        [email, hashed],
      );

      return c.json(
        {
          message: "User registered successfully",
          user: result.rows[0],
        },
        201,
      );
    } catch (e: any) {
      return c.json({ message: "User already exists" }, 409);
    }
  }

  static async loginUser(c: Context) {
    const body = await c.req.parseBody();

    const schema = z.object({
      email: z.email(),
      password: z
        .string()
        .min(5, { error: "Password must be at least 5 characters long" }),
    });

    const parsed = schema.safeParse(body);

    if (!parsed.success) return c.json({ error: parsed.error });

    const { email, password } = parsed.data;

    // get data from DB
    const response = await pool.query("SELECT * FROM users WHERE email = $1;", [
      email,
    ]);
    const user = response.rows[0];
    if (!user) {
      return c.json({ message: "User not found" }, 401);
    }

    // compare password
    const isMatch = await bcrypt.compare(password, response.rows[0].password);

    // check if password is correct
    if (!isMatch) {
      return c.json({ message: "Password is incorrect" }, 401);
    }

    const token = generateToken();

    // update token
    await pool.query("UPDATE users SET token = $1 WHERE email = $2;", [
      token,
      email,
    ]);

    // return user
    return c.json({
      message: "User logged in successfully",
      user: {
        email: response.rows[0].email,
        token,
      },
    });
  }

  static async logoutUser(c: Context) {
    const param = c.req.param();

    // declare schema
    const schema = z.object({
      email: z.email(),
    });

    // parsing data
    const parsed = schema.safeParse(param);
    if (!parsed.success) return c.json({ error: parsed.error });

    const { email } = parsed.data;

    try {
      await pool.query("UPDATE users SET token = $1 WHERE email = $2;", [
        null,
        email,
      ]);

      return c.json({ message: "User logged out successfully" }, 200);
    } catch (e: any) {
      return c.json({ message: "User not found" }, 404);
    }
  }
}
