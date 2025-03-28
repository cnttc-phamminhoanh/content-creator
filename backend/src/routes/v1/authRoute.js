const express = require('express')
const validateDto = require('../../validations/validateDto')
const { signupUserDto, loginUserDto } = require('../../dto/authDto')
const { authController } = require('../../controllers/authController')

const Router = express.Router()

Router.route('/signup')
  .post(validateDto(signupUserDto), authController.signupUser)

Router.route('/login')
  .post(validateDto(loginUserDto), authController.loginUserWithEmailPassword)

module.exports = Router
