const { text } = require('express');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true
  },
  fosurname: {
    type: String,
    required: true,
    trim: true
  },
  folname: {
    type: String,
    required: true,
    trim: true
  },
  sex:{
    type: String,
    required: true
  },
  nin: {
    type: String,
    required: true,
    trim:true
  },
  phoneno: {
    type: String,
    required: true,
    trim: true
  },
  foDateReg: {
    type: Date,
    required: true
  },
  fouserid: {
    type: String,
    required: true
  },
  fopwd: {
    type: String,
    required: true
  }
})