import request from "supertest"
import express from "express"
import axios from "axios"
import albumsRouter from "../api/albums"
import { AlbumType } from "../types"

jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>

const app = express()
app.use("/albums", albumsRouter)

describe("GET /albums/:id", () => {
  it("should return albums for a valid user ID", async () => {
    const mockAlbums: AlbumType[] = [
      { userId: 1, id: 1, title: "Album 1" },
      { userId: 1, id: 2, title: "Album 2" },
    ]

    mockedAxios.get.mockResolvedValue({ data: mockAlbums })

    const response = await request(app).get("/albums/1")

    expect(response.status).toBe(200)
    expect(response.body).toEqual(mockAlbums)
  })

  it("should return 404 if no albums are found", async () => {
    mockedAxios.get.mockResolvedValue({ data: [] })

    const response = await request(app).get("/albums/999")

    expect(response.status).toBe(404)
    expect(response.body).toEqual({ error: "Albums do ID 999 não encontrados" })
  })

  it("should return 500 if there is an error fetching albums", async () => {
    mockedAxios.get.mockRejectedValue(new Error("Erro ao buscar os albums"))

    const response = await request(app).get("/albums/1")

    expect(response.status).toBe(500)
    expect(response.body).toEqual({ error: "Erro ao buscar os albums do ID 1" })
  })
})
