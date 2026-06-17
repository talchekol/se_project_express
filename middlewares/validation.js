// middlewares/validation.js
const { Joi, celebrate } = require("celebrate");
const validator = require("validator");

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error("string.uri");
};

// 1. ולידציה ליצירת פריט לבוש (Clothing Item)
module.exports.validateCardBody = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30).messages({
      "string.min": 'The minimum length of the "name" field is 2',
      "string.max": 'The maximum length of the "name" field is 30',
      "string.empty": 'The "name" field must be filled in',
    }),
    imageUrl: Joi.string().required().custom(validateURL).messages({
      "string.empty": 'The "imageUrl" field must be filled in',
      "string.uri": 'The "imageUrl" field must be a valid url',
    }),
    weather: Joi.string().required().valid("hot", "warm", "cold").messages({
      "string.empty": 'The "weather" field must be filled in',
      "any.only": 'The "weather" field must be one of [hot, warm, cold]',
    }),
  }),
});

// 2. ולידציה ליצירת משתמש חדש (Signup)
module.exports.validateUserBody = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30).messages({
      "string.min": 'The minimum length of the "name" field is 2',
      "string.max": 'The maximum length of the "name" field is 30',
      "string.empty": 'The "name" field must be filled in',
    }),
    avatar: Joi.string().required().custom(validateURL).messages({
      "string.empty": 'The "avatar" field must be filled in',
      "string.uri": 'The "avatar" field must be a valid url',
    }),
    email: Joi.string().required().email().messages({
      "string.empty": 'The "email" field must be filled in',
      "string.email": 'The "email" field must be a valid email address',
    }),
    password: Joi.string().required().messages({
      "string.empty": 'The "password" field must be filled in',
    }),
  }),
});

// 3. ולידציה להתחברות משתמש קיים (Signin / Login)
module.exports.validateAuthentication = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      "string.empty": 'The "email" field must be filled in',
      "string.email": 'The "email" field must be a valid email address',
    }),
    password: Joi.string().required().messages({
      "string.empty": 'The "password" field must be filled in',
    }),
  }),
});

// 4. ולידציה לבדיקת מזהים ב-URL (כמו itemId או userId)
module.exports.validateId = celebrate({
  params: Joi.object()
    .keys({
      itemId: Joi.string().alphanum().length(24).messages({
        "string.length":
          "The id must be a hexadecimal value length of 24 characters",
        "string.alphanum": "The id must contain only alphanumeric characters",
      }),
      userId: Joi.string().alphanum().length(24).messages({
        "string.length":
          "The id must be a hexadecimal value length of 24 characters",
        "string.alphanum": "The id must contain only alphanumeric characters",
      }),
    })
    .unknown(true), // מאפשר קבלת פרמטרים נוספים במידה ויש בנתיב מבלי להכשיל את הבקשה
});

// 5. ולידציה לעדכון פרטי משתמש (User Update)
module.exports.validateUserUpdate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30).messages({
      "string.min": 'The minimum length of the "name" field is 2',
      "string.max": 'The maximum length of the "name" field is 30',
      "string.empty": 'The "name" field must be filled in',
    }),
    avatar: Joi.string().required().custom(validateURL).messages({
      "string.empty": 'The "avatar" field must be filled in',
      "string.uri": 'The "avatar" field must be a valid url',
    }),
  }),
});
