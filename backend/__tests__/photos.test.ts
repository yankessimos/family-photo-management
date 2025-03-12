import request from "supertest"
import express from "express"
import photosRouter from "../api/photos"

jest.mock("axios")
const axios = require("axios")

const app = express()
app.use(express.json())
app.use("/photos", photosRouter)

describe("GET /photos/:id", () => {
  it("deve retornar uma lista de fotos para um ID de álbum válido", async () => {
    const mockPhotos = [
      { albumId: 1, id: 1, title: "Foto 1", url: "http://example.com/photo1.jpg", thumbnailUrl: "http://example.com/thumb1.jpg" },
      { albumId: 1, id: 2, title: "Foto 2", url: "http://example.com/photo2.jpg", thumbnailUrl: "http://example.com/thumb2.jpg" },
    ]
    axios.get.mockResolvedValue({ data: mockPhotos })

    const response = await request(app).get("/photos/1")

    expect(response.status).toBe(200)
    expect(response.body).toEqual(mockPhotos)
  })

  it("deve retornar 404 se nenhuma foto for encontrada", async () => {
    axios.get.mockResolvedValue({ data: [] })

    const response = await request(app).get("/photos/999")

    expect(response.status).toBe(404)
    expect(response.body).toEqual({ error: "Fotos do álbum 999 não encontradas" })
  })

  it("deve retornar 500 em caso de erro na requisição", async () => {
    axios.get.mockRejectedValue(new Error("Erro na API"))

    const response = await request(app).get("/photos/1")

    expect(response.status).toBe(500)
    expect(response.body).toEqual({ error: "Erro ao buscar as fotos do álbum 1" })
  })
})
