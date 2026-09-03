const express=require('express');
const router=express.Router();
const { createBlog, getAllBlogs, getBlogById, updateBlogById, deleteBlogById } = require('../Controller/BlogsController.js');
const blogInputValidator = require('../Middleware/blogInputValidation.js');


// Create a new blog
router.post('/createBlog',blogInputValidator,  createBlog);

// Get all blogs
router.get('/', getAllBlogs);

// Get a blog by ID
router.get('/blog/:id', getBlogById);

// Update a blog by ID
router.put('/blog/:id',updateBlogById);

// Delete a blog by ID
router.delete('/blog/:id', deleteBlogById);

module.exports = router;    
