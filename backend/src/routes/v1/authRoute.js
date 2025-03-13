const express = require('express')
const validateDto = require('../../validations/validateDto')
const { signupUserDto } = require('../../dto/authDto')
const { authController } = require('../../controllers/authController')

const Router = express.Router()

Router.route('/signup')
  .post(validateDto(signupUserDto), authController.signupUser)

Router.route('/login')
  .post(authController.loginUserWithEmailPassword)

module.exports = Router
