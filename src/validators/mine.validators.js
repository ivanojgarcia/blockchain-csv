import joi from "joi";
/**
 *
 * @param {object string} data
 * @returns boolean
 */
const mineSchema = (data) => {
  const schema = joi.object({
    message: joi.string().required().messages({
      "any.required": "The <message> parameter is required",
    }),
  });
  return schema.validate(data);
};

export default mineSchema;
