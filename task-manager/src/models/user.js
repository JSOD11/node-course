const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', { // define User blueprint
  name: {
    type: String,
    required: true,
    trim: true // trims extra spaces
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Your password cannot include "password".')
      }
    }
  },
  age: {
    type: Number,
    default: 0, // sets default age to be 0
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number!')
      }
    }
  },
  email: {
    type: String,
    required: true,
    lowercase: true, // makes lowercase
    trim: true, // trims spaces off
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email provided is invalid')
      }
    }
  }
})

module.exports = User