import { Hono } from "hono";
import UserAuthController from "../controllers/userAuth.controller";
import { validateToken } from "../middlewares/validateToken.middleware";

const auth = new Hono();

// register
auth.post("/register", UserAuthController.registerUser);

// login
auth.post("/login", UserAuthController.loginUser);

// logout
auth.delete("/logout/:email", validateToken, UserAuthController.logoutUser);

export default auth;
