const Blog = require('../Models/blogsModel.js');
async function createBlog(req, res) {
    console.log("printing of blog body",req.body);
  const { title, content, author, nationality } = req.body;
  const blogObj=Blog({ title, content, author, nationality })
  try{
    const response=await blogObj.save();
    res.status(201).json(response);
  }catch(err){
    res.status(500).json({ message: err.message });
  }
}

async function getAllBlogs(req, res) {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getBlogById(req, res) {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function updateBlogById(req, res) {
  const { id } = req.params;
  const { title, content, author, nationality } = req.body;
  try {
    const blog = await Blog.findByIdAndUpdate(id, { title, content, author, nationality }, { new: true });
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteBlogById(req, res) {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById
};
