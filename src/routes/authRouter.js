import { Router } from "express";
import { signUp } from "../controllers/authController.js";
import userValidationMiddleware from "../middlewares/userValidationMiddleware.js";
const router = Router();
router.post("/sign-up", userValidationMiddleware, signUp);

export default router;
