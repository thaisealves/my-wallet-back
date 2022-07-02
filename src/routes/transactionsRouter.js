import { Router } from "express";
import { transactionValidationMiddleware } from "../middlewares/transactionValidationMiddleware.js";
import { postTransactions } from "../controllers/transactionsController.js";
const router = Router();
router.post("/transactions", transactionValidationMiddleware, postTransactions);
router.get("/transactions");
export default router;
