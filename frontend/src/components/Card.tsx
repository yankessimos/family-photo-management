import { UserType } from "@/types"
import { NavLink } from "react-router-dom"

function Card({ user }: { user: UserType }) {
  return (
    <NavLink className="inset-shadow-sm inset-shadow-gray-400 rounded-md py-2 px-4 flex" to={`/user/${user.id}`}>
      <header aria-label="Informações do usuário">
        <p aria-label="Nome do usuário">
          Álbum de <span className="font-semibold">{user.name}</span>
        </p>
        <p aria-label="Email do usuário" className="text-sm italic">
          {user.email}
        </p>
      </header>
    </NavLink>
  )
}

export default Card
