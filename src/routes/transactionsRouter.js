import { Router } from "express";
import { transactionValidationMiddleware } from "../middlewares/transactionValidationMiddleware.js";
import {
  postTransactions,
  getTransactions,
} from "../controllers/transactionsController.js";
const router = Router();
router.post("/transactions", transactionValidationMiddleware, postTransactions);
router.get("/transactions", getTransactions);
export default router;
