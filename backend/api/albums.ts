import express, { Request, Response } from "express"
import axios, { AxiosResponse } from "axios"
import { AlbumType } from "../types"

const router = express.Router()

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const response: AxiosResponse<AlbumType[]> = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`)

    if (response.data.length === 0) {
      res.status(404).json({ error: `Albums do ID ${id} não encontrados` })
    }

    res.json(response.data)
  } catch (error) {
    console.error(`Erro ao buscar os albums do ID ${id}: `, error)
    res.status(500).json({ error: `Erro ao buscar os albums do ID ${id}` })
  }
})

export default router
