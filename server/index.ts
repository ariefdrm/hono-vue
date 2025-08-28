import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import auth from "./routes/auth.route";

const app = new Hono();

app.use(logger());
app.use(cors());

app.route("/auth", auth);

export default app;
