import { createMiddleware } from "hono/factory";
import TokenService from "../services/token";

export const validateToken = createMiddleware(async (c, next) => {
  const token = c.req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return c.json({ message: "No token provided" }, 401);

  const result = await TokenService.validateToken(token);

  if (!result) return c.json({ message: "You don't have access" }, 401);

  c.set("user", result);
  await next();
});
