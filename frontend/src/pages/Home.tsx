import Card from "@/components/Card"
import Header from "@/components/Header"
import { UserType } from "@/types"

function Home({ users }: { users: UserType[] }) {
  return (
    <Header title="Álbuns dos Familiares">
      <section className="container mx-auto p-2">
        <nav aria-label="Navegação de usuários" className="mx-6 my-2 columns-1 md:columns-3">
          {users
            .filter((user: UserType) => user.id !== 1)
            .map((user: UserType) => (
              <div className="p-2">
                <Card user={user} key={user.id} />
              </div>
            ))}
        </nav>
      </section>
    </Header>
  )
}

export default Home
