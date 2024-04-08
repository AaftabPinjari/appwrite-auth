import { useRef } from "react"
import { useAuth } from "../context/authContext"



function LoginForm() {

    const { loginUser } = useAuth()

    const loginForm = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = loginForm.current.email.value
        const password = loginForm.current.password.value

        const userInfo = { email, password }
        console.log(userInfo)
        loginUser(userInfo)
    }

    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit} ref={loginForm}>
            <input
                className="border-[0.5px] border-gray-400 p-2 rounded-lg"
                required
                autoComplete="username"
                name="email"
                type="email"
                placeholder="Enter your Email"
            />
            <input
                className="border-[0.5px] border-gray-400 p-2 rounded-lg"
                required
                autoComplete="current-password"
                name="password"
                type="password"
                placeholder="Enter your Password"
            />
            <button
                className='text-white bg-gradient-to-tr from-blue-700 to-teal-300 px-8 py-2 rounded-lg mb-4 self-center'
                type="submit">Login</button>
        </form>
    )
}

export default LoginForm