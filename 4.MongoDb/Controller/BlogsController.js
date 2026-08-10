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

function getAllBlogs(req, res) {
  Blog.find()
    .then(blogs => res.status(200).json(blogs))
    .catch(err => res.status(500).json({ error: err.message }));
}

function getBlogById(req, res) {
  const { id } = req.params;
  Blog.findById(id)
    .then(blog => {
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      res.status(200).json(blog);
    })
    .catch(err => res.status(500).json({ error: err.message }));
}

function updateBlogById(req, res) {
  const { id } = req.params;
  const { title, content, author, nationality } = req.body;
  Blog.findByIdAndUpdate(id, { title, content, author, nationality }, { new: true })
    .then(blog => {
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      res.status(200).json(blog);
    })
    .catch(err => res.status(500).json({ error: err.message }));
}

function deleteBlogById(req, res) {
  const { id } = req.params;
  Blog.findByIdAndDelete(id)
    .then(blog => {
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      res.status(204).send();
    })
    .catch(err => res.status(500).json({ error: err.message }));
}

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById
};
