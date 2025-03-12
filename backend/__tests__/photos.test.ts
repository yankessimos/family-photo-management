import request from "supertest"
import express from "express"
import axios from "axios"
import photosRouter from "../api/photos"
import { PhotoType } from "../types"

jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>

const app = express()
app.use("/photos", photosRouter)

describe("GET /photos/:id", () => {
  it("should return photos for a valid album ID", async () => {
    const mockPhotos: PhotoType[] = [
      { albumId: 1, id: 1, title: "Photo 1", url: "http://example.com/photo1.jpg", thumbnailUrl: "http://example.com/photo1_thumb.jpg" },
      { albumId: 1, id: 2, title: "Photo 2", url: "http://example.com/photo2.jpg", thumbnailUrl: "http://example.com/photo2_thumb.jpg" },
    ]

    mockedAxios.get.mockResolvedValue({ data: mockPhotos })

    const response = await request(app).get("/photos/1")

    expect(response.status).toBe(200)
    expect(response.body).toEqual(mockPhotos)
  })

  it("should return 404 if no photos are found", async () => {
    mockedAxios.get.mockResolvedValue({ data: [] })

    const response = await request(app).get("/photos/999")

    expect(response.status).toBe(404)
    expect(response.body).toEqual({ error: "Fotos do álbum 999 não encontradas" })
  })

  it("should return 500 if there is an error fetching photos", async () => {
    mockedAxios.get.mockRejectedValue(new Error("Erro ao buscar as fotos"))

    const response = await request(app).get("/photos/1")

    expect(response.status).toBe(500)
    expect(response.body).toEqual({ error: "Erro ao buscar as fotos do álbum 1" })
  })
})
