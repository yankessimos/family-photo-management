import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Albums from "./pages/Albums"
import Photos from "./pages/Photos"
import { useEffect, useState } from "react"
import { UserType } from "./types"

function App() {
  const [users, setUsers] = useState<UserType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/users")

        if (!response.ok) {
          throw new Error("Erro ao buscar usuários")
        }

        const data = await response.json()
        setUsers(data)
      } catch (error) {
        setError(error instanceof Error ? error.message : "Erro desconhecido")
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (isLoading) {
    return <p>Carregando usuários...</p>
  }

  if (error) {
    return <p className="text-red-500">Erro: {error}</p>
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route path="/user/:userId" element={<Albums users={users} />} />
        <Route path="/user/album/:albumId" element={<Photos />} />
      </Routes>
    </Router>
  )
}

export default App
