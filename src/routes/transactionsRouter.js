import { Router } from "express";
import { transactionValidationMiddleware } from "../middlewares/transactionValidationMiddleware.js";
import {
  postTransactions,
  getTransactions,
  deleteTransactions,
} from "../controllers/transactionsController.js";

const router = Router();
router.post("/transactions", transactionValidationMiddleware, postTransactions);
router.get("/transactions", getTransactions);
router.delete("/transactions/:id", deleteTransactions);
export default router;
