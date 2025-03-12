import axios, { AxiosResponse } from "axios"
import express, { Request, Response } from "express"
import { PhotoType } from "../types"

const router = express.Router()

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const response: AxiosResponse<PhotoType[]> = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)

    if (response.data.length === 0) {
      res.status(404).json({ error: `Photos of album ${id} not found` })
    }

    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: `Error while searching for photos of album with ID ${id}` })
  }
})

export default router
