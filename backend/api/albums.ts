import express, { Request, Response } from "express"
import axios, { AxiosResponse } from "axios"
import { AlbumType } from "../types"

const router = express.Router()

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const response: AxiosResponse<AlbumType[]> = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`)

    if (response.data.length === 0) {
      res.status(404).json({ error: `Albums with ID ${id} not found` })
    }

    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: `Error while searching for album with ID ${id}` })
  }
})

export default router
