import transactionSchema from "../schemas/transactionSchema.js";

export function transactionValidationMiddleware (req, res, next){
    const validation = transactionSchema.validate(req.body);
  if (validation.error) {
    console.log(validation.error)
    return res.sendStatus(422);
  }
  next();
}