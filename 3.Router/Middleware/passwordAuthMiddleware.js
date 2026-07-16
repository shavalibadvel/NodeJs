require('dotenv').config();
const Password = process.env.SERVER_SECRET_PASSWORD;

function passwordAuthMiddleware(req, res, next) {
    const headers = req.headers;
    // Express automatically converts all incoming headers to lowercase
    const authorization = headers ? headers.authorization : null; 
    
    if (authorization !== Password) {
        res.status(401).json({ message: "Unauthorized access. Invalid server password in headers." });
        return;
    }
    next();
}

module.exports = { passwordAuthMiddleware };