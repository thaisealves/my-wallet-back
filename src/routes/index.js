import { Router } from "express";
import authRouter from "./authRouter.js";
import transactionsRouter from "./transactionsRouter.js";
import { verifyToken } from "../middlewares/tokenVerify.js";
const router = Router();
router.use(authRouter);
router.use(verifyToken, transactionsRouter);
export default router;
