const express=require('express');
const router=express.Router();
const { createBlog, getAllBlogs, getBlogById, updateBlogById, deleteBlogById } = require('../Controller/BlogsController.js');

// Create a new blog
router.post('/createBlog', createBlog);

// Get all blogs
router.get('/', getAllBlogs);

// Get a blog by ID
router.get('/:id', getBlogById);

// Update a blog by ID
router.put('/:id', updateBlogById);

// Delete a blog by ID
router.delete('/:id', deleteBlogById);

module.exports = router;    
