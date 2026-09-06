const {validateBlogInput} = require('../Validators/blogInputValidator.js');
function blogInputValidator(req, res, next) {

    const { error } = validateBlogInput(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}
module.exports = blogInputValidator;
