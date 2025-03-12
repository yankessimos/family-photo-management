import Card from "@/components/Card"
import Header from "@/components/Header"
import { UserType } from "@/types"

function Home({ users }: { users: UserType[] }) {
  return (
    <Header title="Álbuns dos Familiares">
      <section className="container mx-auto">
        <nav aria-label="Navegação de usuários" className="px-5 py-2">
          {users
            .filter((user: UserType) => user.id !== 1)
            .map((user: UserType) => (
              <Card user={user} key={user.id} />
            ))}
        </nav>
      </section>
    </Header>
  )
}

export default Home
