const axios = require('axios'),
  express = require('express'),
  jwt = require('jsonwebtoken'),
  registerModel = require('../model/registration'),
  databaseHelper = require('../utils/database_helper'),

  bcrypt = require('bcrypt'),
  // validator = require('validator'),
  moment = require('moment'),
  nodemailer = require('nodemailer');

module.exports = {
  registerUser
}

async function registerUser (req, res) {
  const { firstName, lastName, dob, gender, mobile, email, password } = req.body
  // if (!firstName || !lastName || !dob || !gender || !mobile || !email || !password) res.status(404).send({ message: 'missing required parameter' })

  const passcode = bcrypt.hashSync(password, 12);
  console.log('password...........',passcode);
  const updateData = { firstName, lastName, dob, gender, mobile, email, password : passcode }

  const draftId = await databaseHelper.create(registerModel, updateData).then(created => created._id)
  console.log('draftId..........', draftId);
  if (draftId) res.status(201).send({ message: 'Register Successful' })
  else res.status(401).send({ message: 'Failed to register' })
}