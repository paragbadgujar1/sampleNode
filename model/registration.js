// const mongoConnect = require('../model/db'); //reference of dbconnection.js
const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timestamps = new Schema({
  register:Date,
  login: Date,
})

const schemaDef = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  dob: { type: String },
  gender: { type: String },
  mobile: { type: String },
  email: { type: String },
  password: { type: String },
  isadmin: { type: Boolean, default: false },
  timestamps,
}, { timestamps: true })

const Register = mongoose.model('logins', schemaDef)
module.exports = Register
