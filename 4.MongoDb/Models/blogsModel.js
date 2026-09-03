const mongoose = require('mongoose');
const { data } = require('../userData');
const validatorLib = require('validator');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: [5, 'Title must be at least 5 characters long'],
    validate: (data) => {
      return validatorLib.isAlphanumeric(data)
    }
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    trim: true,
  },
  nationality: {
    type: String,
    trim: true,
  },

}, {
  timestamps: true
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;