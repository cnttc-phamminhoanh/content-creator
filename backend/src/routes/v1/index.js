const express = require('express')
const userRoutes = require('./userRoute')

const Router = express.Router()

Router.get('/', (req, res) => {
  res.status(200).json( {
    message: 'APIs V1 are ready to use'
  })
})

Router.use('/users', userRoutes)

module.exports = Router
