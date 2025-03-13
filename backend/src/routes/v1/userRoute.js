const express = require('express')
const { userController } = require('../../controllers/userController')

const Router = express.Router()

Router.route('/me')
  .get(userController.getMe)

module.exports = Router
