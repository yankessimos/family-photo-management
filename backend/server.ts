import express from "express"
import usersRouter from "./api/users"
import albumsRouter from "./api/albums"
import photosRouter from "./api/photos"

const app = express()
app.use(express.json())

app.use("/users", usersRouter)
app.use("/albums", albumsRouter)
app.use("/photos", photosRouter)

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000")
})
