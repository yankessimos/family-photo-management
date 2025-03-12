import axios, { AxiosResponse } from "axios"
import express, { Request, Response } from "express"
import { UserType } from "../types"

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
  try {
    const response: AxiosResponse<UserType[]> = await axios.get("https://jsonplaceholder.typicode.com/users")
    res.json(response.data)
  } catch (error) {
    console.error("Erro ao buscar todos os usuários: ", error)
    res.status(500).json({ error: "Erro ao buscar todos os usuários" })
  }
})

export default router
