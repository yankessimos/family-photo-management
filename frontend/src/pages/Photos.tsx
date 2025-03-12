import Header from "@/components/Header"
import { PhotoType } from "@/types"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Photos() {
  const { albumId } = useParams<{ albumId: string }>()
  const [photos, setPhotos] = useState<PhotoType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAlbumPhotos() {
      try {
        const response = await fetch(`/api/photos/${albumId}`)

        if (!response.ok) {
          throw new Error("Erro ao buscar fotos do álbum")
        }

        const data = await response.json()
        setPhotos(data)
      } catch (error) {
        setError(error instanceof Error ? error.message : "Erro desconhecido")
      } finally {
        setIsLoading(false)
      }
    }

    fetchAlbumPhotos()
  }, [albumId])

  if (isLoading) {
    return <p>Carregando fotos...</p>
  }

  if (error) {
    return <p className="text-red-500">Erro: {error}</p>
  }

  return (
    <Header title="Photos of album">
      <section aria-label="Photos of album">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos
            .filter((photo: PhotoType) => photo.albumId === Number(albumId))
            .map((photo: PhotoType) => (
              <li key={photo.id} className="flex flex-col items-center">
                <img
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  className="h-auto rounded-lg shadow-md"
                  loading="lazy"
                />
                <p className="mt-2 text-center text-sm">{photo.title}</p>
              </li>
            ))}
        </ul>
      </section>
    </Header>
  )
}

export default Photos
