import express from 'express';
import authMiddleware from '../middlewares/auth.middleware.js';
import { updateProfile, getProfile } from "../controllers/profile/index.js";

const profileRouter = express.Router();

profileRouter.get("/profile", authMiddleware, getProfile);
profileRouter.post("/profile", authMiddleware, updateProfile);

export default profileRouter;