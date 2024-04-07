import { Navigate } from "react-router"
import RegisterForm from "../components/RegisterForm"
import { useAuth } from "../context/authContext"

function RegisterPage() {
    const { user } = useAuth()
    return (
        !user ?
            <section className="min-h-screen flex flex-col items-center justify-center gap-10">
                <h1>Register Page</h1>
                <RegisterForm />
            </section> : <Navigate to="/" />
    )
}

export default RegisterPage