import { Hono } from "hono";
import z from "zod";
import bcrypt from "bcrypt";
import { validateToken } from "../middlewares/validateToken.middleware";
import UserService from "../services/user";
import TokenService from "../services/token";

const auth = new Hono();

// register
auth.post("/register", async (c) => {
  const reqJson = await c.req.json();

  const schema = z.object({
    email: z.email().trim(),
    password: z
      .string()
      .min(5, { error: "Password must be at least 5 characters long" })
      .trim(),
  });

  const parsed = schema.safeParse(reqJson);
  if (!parsed.success) return c.json({ error: parsed.error });

  const { email, password } = parsed.data;

  try {
    const result = await UserService.addUser(email, password);

    return c.json(
      {
        message: "User registered successfully",
        data: result,
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
    email: z.email().trim(),
    password: z.string(),
  });

  const parsed = schema.safeParse(body);

  if (!parsed.success) return c.json({ error: parsed.error });

  const { email, password } = parsed.data;

  // get data from DB
  const response = await UserService.getUserByEmail(email);

  // const user = response.rows[0];
  if (!response) {
    return c.json({ message: "User not found" }, 401);
  }

  // compare password
  const isMatch = await bcrypt.compare(password, response.password);

  // check if password is correct
  if (!isMatch) {
    return c.json({ message: "Password is incorrect" }, 401);
  }

  const token = TokenService.generateToken();

  // update token user
  await TokenService.updateTokenUser(token, email);

  // return user
  return c.json({
    message: "User logged in successfully",
    data: {
      email: response.email,
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
    /*
     * for logout, update token to null
     */
    await TokenService.updateTokenUser(null, email);

    return c.json({ message: "User logged out successfully" }, 200);
  } catch (e: any) {
    return c.json({ message: "User not found" }, 404);
  }
});

export default auth;
