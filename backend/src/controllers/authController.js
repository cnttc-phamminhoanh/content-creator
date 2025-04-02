const { authService } = require('../services/authService')

const signupUser = async (req, res, next) => {
  try {
    const accessToken = await authService.signupUser(req.body)

    return res.status(201).json({
      message: 'User registered successfully',
      accessToken
    })
  } catch (error) {
    next(error)
  }
}

const loginUserWithEmailPassword = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const accessToken = await authService.loginUserWithEmailPassword(email, password)

    return res.status(200).json({
      message: 'Login successful',
      accessToken
    })
  } catch (error) {
    next(error)
  }
}

module.exports.authController = {
  signupUser,
  loginUserWithEmailPassword
}
