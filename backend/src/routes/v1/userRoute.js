const express = require('express')
const HttpError = require('http-errors')

const Router = express.Router()

Router.route('/').get(async (req, res, next) => {
  try {
    const users = [
      {
        name: 'mati',
        age: 26,
      },
      {
        name: 'gin',
        age: 25,
      }
    ]

    if (!users) {
      throw HttpError.NotFound('Users Not Found')
    }

    res.status(200).json({
      total: users.length,
      data: users,
    })
  } catch (error) {
    next(error)
  }
})

module.exports = Router
