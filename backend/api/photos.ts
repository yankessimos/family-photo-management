import axios, { AxiosResponse } from "axios"
import express, { Request, Response } from "express"
import { PhotoType } from "../types"

const router = express.Router()

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const response: AxiosResponse<PhotoType[]> = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)

    if (response.data.length === 0) {
      res.status(404).json({ error: `Fotos do álbum ${id} não encontradas` })
    }

    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: `Erro ao buscar as fotos do álbum ${id}` })
  }
})

export default router
