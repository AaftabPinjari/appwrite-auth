import { useAuth } from "../context/authContext"

function HomePage() {
    const { user } = useAuth()
    // console.log(user)
    return (
        <section>
            Home
        </section>
    )
}

export default HomePage