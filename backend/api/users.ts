import axios, { AxiosResponse } from "axios"
import express, { Request, Response } from "express"
import { UserType } from "../types"

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
  try {
    const response: AxiosResponse<UserType[]> = await axios.get("https://jsonplaceholder.typicode.com/users")
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: "Error while searching for all family members" })
  }
})

export default router
