const express = require("express")
const mongoose = require("mongoose")
const authRouter = require("./authRouter")

const PORT = process.env.PORT || 5000



const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
  try {

    await mongoose.connect("mongodb+srv://ivankalunuch12:FpKyxIn17TOq4SO3@cluster0.vxbpfh6.mongodb.net/?retryWrites=true&w=majority")
    app.listen(PORT, () => console.log(`served started on this port: ${PORT}`))
  }
  catch (e) {
    console.log(e)
  }
}
start()