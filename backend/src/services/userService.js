const User = require("../entities/user")
const dataSource = require('../config/data/dataSource')

const userRepository = dataSource.getRepository(User)

const createUser = async ({
  username,
  email,
  password_hash,
}) => {
  const user = {
    username,
    email,
    password_hash,
  }

  return userRepository.save(user)
}

const findUser = async ({
  user_id,
  username,
  email,
}) => {
  const query = {
    user_id,
    username,
    email,
  }

  return userRepository.findOne({
    where: query,
  })
}

module.exports.userService = {
  createUser,
  findUser,
}
