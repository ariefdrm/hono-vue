import { Context, Next } from "hono";
import { getUserToken } from "../utils/getUserToken";

export async function validateToken(c: Context, next: Next) {
  const authorization = c.req.header("Authorization");
  const token = authorization?.split(" ")[1] as string;
  const email = await getUserToken(token);

  if (!authorization) {
    return c.json({ message: "Unauthorized" }, 401);
  }

  if (authorization !== email) {
    return c.json({ message: "Unauthorized" }, 401);
  }

  next();
}
