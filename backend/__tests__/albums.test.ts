import request from "supertest"
import express from "express"
import albumsRouter from "../api/albums"

jest.mock("axios")
const axios = require("axios")

const app = express()
app.use(express.json())
app.use("/albums", albumsRouter)

describe("GET /albums/:id", () => {
  it("deve retornar uma lista de álbuns para um ID de usuário válido", async () => {
    const mockAlbums = [
      { userId: 1, id: 1, title: "Álbum 1" },
      { userId: 1, id: 2, title: "Álbum 2" },
    ]
    axios.get.mockResolvedValue({ data: mockAlbums })

    const response = await request(app).get("/albums/1")

    expect(response.status).toBe(200)
    expect(response.body).toEqual(mockAlbums)
  })

  it("deve retornar 404 se nenhum álbum for encontrado", async () => {
    axios.get.mockResolvedValue({ data: [] })

    const response = await request(app).get("/albums/999")

    expect(response.status).toBe(404)
    expect(response.body).toEqual({ error: "Albums do ID 999 não encontrados" })
  })

  it("deve retornar 500 em caso de erro na requisição", async () => {
    axios.get.mockRejectedValue(new Error("Erro na API"))

    const response = await request(app).get("/albums/1")

    expect(response.status).toBe(500)
    expect(response.body).toEqual({ error: "Erro ao buscar os albums do ID 1" })
  })
})
