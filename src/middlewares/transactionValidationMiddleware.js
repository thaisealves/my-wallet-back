import transactionSchema from "../schemas/transactionSchema.js";

export function transactionValidationMiddleware (req, res, next){
    const validation = transactionSchema.validate(req.body);
  if (validation.error) {
    console.log(validation.error)
    return res.status(422).send(validation.error);
  }
  next();
}