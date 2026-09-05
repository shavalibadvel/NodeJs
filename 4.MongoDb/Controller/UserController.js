const User=require('../Models/UserModel.js');
async function createUser(req,res) {
   const user = req.body;
   const { firstname, lastname, email, age, gender } = user;

   const userObj=User({
    firstName:firstname,
    lastName:lastname,
    email:email,
    age:age,
    gender:gender
   })
   try{
    const response=await userObj.save();
    res.status(201).json(response);
   }catch(err){
    res.status(500).json({ message: err.message });
   }
}

module.exports = {
    createUser
};