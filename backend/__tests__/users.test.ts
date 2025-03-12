import request from "supertest"
import express from "express"
import usersRouter from "../api/users"

jest.mock("axios")
const axios = require("axios")

const app = express()
app.use(express.json())
app.use("/users", usersRouter)

describe("GET /users", () => {
  it("deve retornar uma lista de usuários", async () => {
    const mockUsers = [
      { id: 1, name: "João", email: "joao@example.com" },
      { id: 2, name: "Maria", email: "maria@example.com" },
    ]
    axios.get.mockResolvedValue({ data: mockUsers })

    const response = await request(app).get("/users")

    expect(response.status).toBe(200)
    expect(response.body).toEqual(mockUsers)
  })

  it("deve retornar 500 em caso de erro na requisição", async () => {
    axios.get.mockRejectedValue(new Error("Erro na API"))

    const response = await request(app).get("/users")

    expect(response.status).toBe(500)
    expect(response.body).toEqual({ error: "Erro ao buscar todos os usuários" })
  })
})
