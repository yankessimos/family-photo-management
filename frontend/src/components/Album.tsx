import { AlbumType } from "@/types"
import { NavLink } from "react-router-dom"

function Album({ album }: { album: AlbumType }) {
  return (
    <NavLink className="inset-shadow-sm inset-shadow-gray-400 rounded-md py-2 px-4 flex" to={`/user/album/${album.id}`}>
      <header aria-label="Informações do usuário">
        <p aria-label="Álbum" className="text-sm">
          <span className="font-semibold">Álbum:</span> <span className="uppercase">{album.title}</span>
        </p>
      </header>
    </NavLink>
  )
}

export default Album
