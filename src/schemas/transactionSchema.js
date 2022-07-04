import joi from "joi";

const transactionSchema = joi.object({
  description: joi.string().required(),
  value: joi
    .string()
    .pattern(/^(0|[1-9][0-9]{0,2})(\.\d{3}|\,\d{3})*(\,\d{1,2}|\.\d{1,2})?$/)
    .required(),
  status: joi.string().valid("inflow", "outflow").required(),
});
export default transactionSchema;
