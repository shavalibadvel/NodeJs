const Joi=require('joi');
const BlogInputSchema=Joi.object({
    title:Joi.string().min(5).required().regex(/^[a-zA-Z0-9\s.,!?-]+$/),
    content:Joi.string().required(),
    author:Joi.string().required(),
    nationality:Joi.string().required()
});
function validateBlogInput(data){
    return BlogInputSchema.validate(data);
}

module.exports = {  validateBlogInput };
