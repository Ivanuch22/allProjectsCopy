const User = require("./models/User")
const Role = require("./models/Role")
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
const { secret } = require("./confing")
const { validationResult } = require("express-validator")

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles
  }
  return jwt.sign(payload, secret, { expiresIn: "24h" })
}

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Помилка при реєстрації", errors })
      }
      const { username, password } = req.body
      const candidate = await User.findOne({ username })

      if (candidate) {
        return res.status(400).json({ message: "Користувач з таким іменем уже є" })
      }

      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: "USER" })
      const user = new User({ username, password: hashPassword, roles: [userRole.value] })

      await user.save()
      return res.json({ message: "Користувач успішно зареєстований" })
    }
    catch (e) {
      console.log(e)
      res.status(400).json({ message: "Registration error" })

    }
  }
  async login(req, res) {
    try {
      const { username, password } = req.body

      const user = await User.findOne({ username })
      if (!user) {
        return res.status(400).json({ message: `Користувач ${username} не знайдений` })
      }

      const validPassword = bcrypt.compareSync(password, user.password)
      if (!validPassword) {
        return res.status(400).json({ message: `Не правильний пароль` })
      }

      const token = generateAccessToken(user._id, user.roles)
      return res.json({ token })
    }
    catch (e) {
      console.log(e)
      res.status(400).json({ message: "Login error" })
    }
  }
  async getUsers(req, res) {
    try {
      const users = await User.find()
      res.json(users)
    }
    catch (e) {
      console.log(e)
    }
  }
}
module.exports = new authController()