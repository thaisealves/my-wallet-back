import signUpSchema from "../schemas/signUpSchema.js";
import signInSchema from "../schemas/signInSchema.js";

export function signUpValidationMiddleware(req, res, next) {
  const validation = signUpSchema.validate(req.body);
  if (validation.error) {
    console.log(validation.error)
    return res.sendStatus(422);
  }
  next();
}

export function loginValidationMiddleware(req, res, next){
  const validation = signInSchema.validate(req.body);
  if (validation.error) {
    console.log(validation.error)
    return res.sendStatus(422);
  }
  next();
  res.locals.user = req.body
}