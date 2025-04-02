const User = require('../entities/user')
const dataSource = require('../config/data/dataSource')

const userRepository = dataSource.getRepository(User)

const createUser = async ({
  username,
  email,
  password_hash
}) => {
  const user = {
    username,
    email,
    password_hash
  }

  const newUser = await userRepository.save(user)

  return newUser
}

const findUser = async ({
  user_id,
  username,
  email
}) => {
  const query = {
    user_id,
    username,
    email
  }

  const user = await userRepository.findOne({
    where: query
  })

  return user
}

module.exports.userService = {
  createUser,
  findUser
}
