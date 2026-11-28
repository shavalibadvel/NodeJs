const joi = require('joi');
const objectId = joi.string().hex().length(24).messages({
  'string.hex': '{{#label}} must be a valid MongoDB ObjectId',
  'string.length': '{{#label}} must be 24 characters long'
});
const blogInputValidateSchema=joi.object({
    title:joi.string().min(5).required().pattern(/^[a-zA-z0-9\s]+$/),
    content:joi.string().required().max(10000),
    author:objectId.required(),
    nationality:joi.string().required().min(2).max(100).regex(/^[a-zA-Z]+$/)
})
module.exports={blogInputValidateSchema};
