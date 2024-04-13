import { useAuth } from "../context/authContext"

function HomePage() {
    const { user } = useAuth()
    // console.log(user)
    return (
        <section className="">
            Home
        </section>
    )
}

export default HomePage