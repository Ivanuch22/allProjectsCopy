import express from "express"
import path from "path"

//отримання рядка з адресою на папку в якій цей файл
const __dirname = path.resolve()

// порт я якому запускається сервер
const PORT = process.env.PORT ?? 5000;

const app = express();

app.use(express.static(path.resolve(__dirname, "static")))

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "static", "index.html"))
// })
app.get("/features", (req, res) => {
  res.sendFile(path.resolve(__dirname, "static", "features.html"))
})
app.get("/download", (req, res) => {
  res.download(path.resolve(__dirname, "static", "index.html"))
})

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
