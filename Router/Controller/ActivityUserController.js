const userData=require('../userData.js');
function GetAllUsers(req, res) {
    const users = userData.data;
    const payload = {
        users,
        size: users.length
    }
    res.status(200).json(payload);
}
function GetUsersByGender(req, res) {
    const gender = req.query?.gender.toLowerCase();
    const users = userData.data.filter(user => user.gender.toLowerCase() === gender);
    const payload = {
        users: users,
        size: users.length
    }
    res.status(200).json(payload);
}
function GetUserByFirstName(req, res) {
    const params=req.params;
    const firstName = params.firstName.toLowerCase();
    const users = userData.data.filter(user => user.name.first.toLowerCase() === firstName);
    const payload = {
        users: users,
        size: users.length
    }
    res.status(200).json(payload);
}
module.exports = { GetAllUsers, GetUsersByGender, GetUserByFirstName };