const { findUser } = require('../services/userService')

const getMe = async (req, res, next) => {
  try {
    const user_id = '1234565'

    const user = await findUser({
      user_id
    })

    return res.status(200).json({
      message: 'Get me',
      user
    })
  } catch (error) {
    next(error)
  }
}

module.exports.userController = {
  getMe
}
