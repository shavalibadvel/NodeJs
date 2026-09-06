const mongoose = require('mongoose');
const { data } = require('../userData');
const validatorLib = require('validator');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: [5, 'Title must be at least 5 characters long'],
    validate: {validator: function(v) {
        // Allows letters, numbers, and spaces
        return /^[a-zA-Z0-9\s]+$/.test(v);
      },
    }
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
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