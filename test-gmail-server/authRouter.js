const Router = require("express")
const router = new Router()
const controller = require('./authController')
const { check } = require("express-validator")
const authMiddleware = require("./middleware/authMiddleware")

router.post("/registration", [
  check("username", "Імя каристувача не може бути пустим").notEmpty(),
  check("password", "Має бути більше ніж 4 і менше ніж 10 символів").isLength({ min: 4, max: 10 })
], controller.registration)
router.post("/login", controller.login)
router.get("/users", authMiddleware, controller.getUsers)

module.exports = router