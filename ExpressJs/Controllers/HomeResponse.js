//information about the home page
function HomeResponse(req, res) {
    res.status(209).send('Hello World from home page');
}
//module.exports={HomeResponse}
module.exports = { HomeResponse };
