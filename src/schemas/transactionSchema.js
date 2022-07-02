import joi from "joi";

const transactionSchema = joi.object({
  transactionName: joi.string().required(),
  value: joi
    .string()
    .pattern(/^(0|[1-9][0-9]{0,2})(,\d{3})*(\.\d{1,2})?$/)
    .required(),
  status: joi.string().valid("enter", "exit").required(),
});
export default transactionSchema;