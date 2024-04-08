import { useAuth } from "../context/authContext"

function HomePage() {
    const { user } = useAuth()
    // console.log(user)
    return (
        <section>
            <h1>Name: {user.name}</h1>
            <h1>Id: {user.$id}</h1>
            <h1>Created At: {user.$createdAt}</h1>
            <h1>Updated At: {user.$updatedAt}</h1>
            <h1>Email: {user.email}</h1>
        </section>
    )
}

export default HomePage