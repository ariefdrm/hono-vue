import { Hono } from "hono";
import { validateToken } from "../middlewares/validateToken.middleware";
import z from "zod";
import bcrypt from "bcrypt";
import pool from "../config/db.config";
import { generateToken } from "../utils/generateToken";

const auth = new Hono();

// register
auth.post("/register", async (c) => {
  const reqJson = await c.req.json();

  const schema = z.object({
    email: z.email(),
    password: z.string().min(5),
  });

  const parsed = schema.safeParse(reqJson);
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
        data: result.rows[0],
      },
      201,
    );
  } catch (e: any) {
    return c.json({ message: "User already exists" }, 409);
  }
});

// login
auth.post("/login", async (c) => {
  const body = await c.req.json();

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
    data: {
      email: response.rows[0].email,
      token,
    },
  });
});

// logout
auth.delete("/logout/:email", validateToken, async (c) => {
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
});

export default auth;
