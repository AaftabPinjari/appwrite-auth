import { useAuth } from "../context/authContext"

function HomePage() {
    const { user } = useAuth()
    console.log(user)
    return (
        <section>
            <h1>{user.email}</h1>
            <h1>{user.$id}</h1>
        </section>
    )
}

export default HomePage