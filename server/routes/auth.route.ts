import { Hono } from "hono";
import UserAuthController from "../controllers/userAuth.controller";

const auth = new Hono();

// register
auth.post("/register", UserAuthController.registerUser);

// login
auth.post("/login", UserAuthController.loginUser);

export default auth;
