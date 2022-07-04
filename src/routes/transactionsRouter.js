import { Router } from "express";
import { transactionValidationMiddleware } from "../middlewares/transactionValidationMiddleware.js";
import {
  postTransactions,
  getTransactions,
  deleteTransactions,
  putTransactions,
} from "../controllers/transactionsController.js";

const router = Router();
router.post("/transactions", transactionValidationMiddleware, postTransactions);
router.get("/transactions", getTransactions);
router.delete("/transactions/:id", deleteTransactions);
router.put(
  "/transactions/:id",
  transactionValidationMiddleware,
  putTransactions
);
export default router;
