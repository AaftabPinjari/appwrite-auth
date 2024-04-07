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
            <label>Email:</label>
            <input
                className="text-black"
                required
                autoComplete="username"
                name="email"
                type="email"
                placeholder="Enter your Email"
            />
            <label>Password:</label>
            <input
                className="text-black"
                required
                autoComplete="current-password"
                name="password"
                type="password"
                placeholder="Enter your Password"
            />
            <button
                className='bg-white rounded-lg  text-black font-semibold text-xl px-2 w-1/2 self-center'
                type="submit">Login</button>
        </form>
    )
}

export default LoginForm