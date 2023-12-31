const jwt = require("jsonwebtoken")
const { secret } = require("../confing")

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
      return res.status(403).json({ message: "Користувач не зареєстрований" })
    }
    const decodedData = jwt.verify(token, secret)
    req.user = decodedData;
    next()
  } catch (e) {
    console.log(e)
    return res.status(403).json({ message: "Користувач не зареєстрований" })

  }
}