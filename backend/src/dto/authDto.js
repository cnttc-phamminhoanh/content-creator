const Joi = require('joi')

const signupUserDto = Joi.object({
  body: Joi.object({
    username: Joi.string()
      .min(3)
      .max(30)
      .pattern(new RegExp('^[a-zA-Z0-9]+$'))
      .message({
        'string.pattern.base': 'Username cannot contain special characters'
      })
      .required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] }
      })
      .required(),
    password: Joi.string()
      .min(8)
      .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$'))
      .messages({
        'string.pattern.base': 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character'
      })
      .required(),
    confirmPassword: Joi.string()
      .valid(Joi.ref('password'))
      .messages({
        'any.only': 'Confirmation password does not match'
      })
      .required()
  })
}).unknown(true)

const loginUserDto = Joi.object({
  body: Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] }
      })
      .required(),
    password: Joi.string()
      .required()
  })
}).unknown(true)

module.exports = {
  signupUserDto,
  loginUserDto
}
