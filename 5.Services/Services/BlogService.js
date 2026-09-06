const Blog=require('../Models/blogsModel');
const User=require('../Models/userModel');
class BlogService{
  static async create({title,content,author,nationality}){
            //business logic
            const user=await BlogService.getUserById(author);
            console.log("printing of user",user);
            const userName=user.id;
            const blogObj=Blog({ title, content, author:userName, nationality })

            //db  talking
            try{
              const response=await blogObj.save();
              return response;
            }catch(err){
              throw new Error(err.message);
            }


    }
    static async getUserById(id){
    const result=await User.findOne({_id:id});
    return result;
    }
  
    
}
  
module.exports=BlogService;
