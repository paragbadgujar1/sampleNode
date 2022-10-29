const axios = require('axios'),
  express = require('express'),
  jwt = require('jsonwebtoken'),
  loginModel = require('../model/registration'),
  bcrypt = require('bcrypt'),
  // validator = require('validator'),
  moment = require('moment'),
  nodemailer = require('nodemailer');

module.exports = {
  loginUser
}

async function loginUser (req, res) {
  console.log('hi user');
}