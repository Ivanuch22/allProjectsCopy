const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")

const app = express();

const PORT = process.env.PORT ?? 5000;



app.use(cors());
app.use(express.json());
const start = async () => {
  try {
    await mongoose.connect("mongodb+srv://ivankalunuch12:FpKyxIn17TOq4SO3@cluster0.vxbpfh6.mongodb.net/?retryWrites=true&w=majority")
    app.listen(PORT, () => console.log(`served started on this port: ${PORT}`))
  }
  catch (e) {
    console.log(e)
  }
}
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  sneakers: String
});

const User = mongoose.model('User', userSchema);

// POST route to create a new user
app.get("/", (req, res) => {
  res.send("<h1>Hello node js<h1/>")
})
app.get("/users", (req, res) => {
  res.send("<h1>Hello users<h1/>")
})
app.post('/users', (req, res) => {
  console.log(req.body)
  const { name, email, password, sneakers } = req.body;
  console.log(name)
  const newUser = new User({ name, email, password, sneakers });
  newUser.save()
    .then(() => {
      res.status(201).json({ message: 'User created successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to create user' });
    });
});


start()



