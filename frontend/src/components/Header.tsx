import { NavLink } from "react-router-dom"

type Props = {
  title: string
  children: React.ReactNode
}

function Header({ title, children }: Props) {
  return (
    <header className="mx-auto">
      <nav aria-label="Menu principal">
        <ul className="flex justify-between px-5 py-2">
          <li className="no-underline hover:underline">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="font-bold">{title}</li>
          <li>Ver meus Álbuns</li>
        </ul>
        <hr />
      </nav>

      {children}
    </header>
  )
}

export default Header
