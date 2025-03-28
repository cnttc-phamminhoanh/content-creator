const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const HttpError = require('http-errors')
const env = require('../config/environment')
const redis = require('../config/data/redis')
const { userService } = require('./userService')

const signupUser = async ({
  username,
  email,
  password,
}) => {
  const existingUserByEmail = await userService.findUser({ email })
  
  if (existingUserByEmail) {
    throw HttpError.BadRequest('Email already exists')
  }

  const existingUserByUsername = await userService.findUser({ username })
  if (existingUserByUsername) {
    throw HttpError.BadRequest('Username already exists')
  }
  
  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = {
    username,
    email,
    password_hash: hashedPassword,
  }

  const user = await userService.createUser(newUser)

  const token = jwt.sign({ userId: user.user_id }, env.JWT_SECRET_ACCESS_TOKEN, { expiresIn: '1h' })

  return token
}

const loginUserWithEmailPassword = async (email, password) => {
  const user = await userService.findUser({ email })

  if (!user) {
    throw HttpError.Unauthorized('Invalid credentials')
  }

  const isPasswordValid = await bcrypt.compare(password, user.password_hash)

  if (!isPasswordValid) {
    throw HttpError.Unauthorized('Invalid credentials')
  }

  const token = jwt.sign({ userId: user.user_id }, env.JWT_SECRET_ACCESS_TOKEN, { expiresIn: '1h' })

  await redis.set(`user:${user.user_id}:token`, token, 'EX', 3600)

  return token
}

module.exports.authService = {
  loginUserWithEmailPassword,
  signupUser,
}
