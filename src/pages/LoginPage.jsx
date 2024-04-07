import { Navigate } from "react-router"
import LoginForm from "../components/LoginForm"
import { useAuth } from "../context/authContext"
import { Link } from "react-router-dom"

function LoginPage() {

    const { user } = useAuth()
    return (
        !user ?
            <section className="min-h-screen flex flex-col items-center justify-evenly">
                <h1>Login Page</h1>
                <LoginForm />
                <h1>Don't have an Account Yet? <Link
                    className="text-red-500"
                    to={"/register"}>Register !</Link></h1>
            </section> : <Navigate to='/' />
    )
}

export default LoginPage