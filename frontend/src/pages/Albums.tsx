import Album from "@/components/Album"
import Header from "@/components/Header"
import { AlbumType, UserType } from "@/types"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Albums({ users }: { users: UserType[] }) {
  const { userId } = useParams<{ userId: string }>()
  const user = users.find((user: UserType) => user.id === Number(userId)) ?? { name: "-" }
  const [albums, setAlbums] = useState<AlbumType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchUserAlbums() {
      try {
        const response = await fetch(`/api/albums/${userId}`)

        if (!response.ok) {
          throw new Error("Erro ao buscar álbuns do usuário")
        }

        const data = await response.json()
        setAlbums(data)
      } catch (error) {
        setError(error instanceof Error ? error.message : "Erro desconhecido")
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserAlbums()
  }, [userId])

  if (isLoading) {
    return <p>Carregando álbuns...</p>
  }

  if (error) {
    return <p className="text-red-500">Erro: {error}</p>
  }

  return (
    <Header title={`Álbuns de ${user.name}`}>
      <section className="container mx-auto p-2">
        <nav aria-label="Navegação de álbuns" className="mx-6 my-2 columns-1 md:columns-3">
          {albums
            .filter((album: AlbumType) => album.userId === Number(userId))
            .map((album: AlbumType) => (
              <div className="p-2">
                <Album key={album.id} album={album} />
              </div>
            ))}
        </nav>
      </section>
    </Header>
  )
}

export default Albums
