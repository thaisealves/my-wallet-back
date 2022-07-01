import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";
import {
  signUpValidationMiddleware,
  loginValidationMiddleware,
} from "../middlewares/userValidationMiddleware.js";
const router = Router();
router.post("/sign-up", signUpValidationMiddleware, signUp);
router.post("/sign-in", loginValidationMiddleware, signIn);
export default router;
