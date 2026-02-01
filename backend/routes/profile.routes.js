import express from 'express';
import authMiddleware from '../middlewares/auth.middleware.js';
import { updateProfile, getProfile, updatePassword } from "../controllers/profile/index.js";

const profileRouter = express.Router();

profileRouter.get("/profile", authMiddleware, getProfile);
profileRouter.post("/profile", authMiddleware, updateProfile);
profileRouter.post("/profile/password", authMiddleware, updatePassword);

export default profileRouter;