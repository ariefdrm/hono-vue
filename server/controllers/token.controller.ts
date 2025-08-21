import { Context } from "hono";

export default class TokenController {
  async refresh(c: Context) {
    return c.text("refresh token");
  }
}
