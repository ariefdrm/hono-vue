import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { getAllUsers } from "./controllers/user.controller";
import { connect } from "./config/db.config";

const app = new Hono();

app.use(logger());
app.use(cors());

connect();

app.get("/", getAllUsers);

app.get("/api/hello/:name", (c) => {
  const name = c.req.param("name");

  return c.json({ name });
});

export default app;
