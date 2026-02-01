import express from "express";
import { signup, login } from "../controllers/auth/index.js";

const authRouter = express.Router();

authRouter.post("/auth/login", login);
authRouter.post("/auth/signup", signup);

export default authRouter;