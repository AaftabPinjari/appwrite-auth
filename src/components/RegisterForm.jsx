import { useRef } from "react"
import { useAuth } from "../context/authContext"



function RegisterForm() {

    const { registerUser } = useAuth()

    const registerForm = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = registerForm.current.name.value
        const email = registerForm.current.email.value
        const password = registerForm.current.password.value

        const userInfo = { name, email, password }
        // console.log(userInfo)
        registerUser(userInfo)



    }
    return (
        <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit} ref={registerForm}>
            <label>Name:</label>
            <input
                className="text-black"
                required
                name="name"
                type="text"
                placeholder="Enter your name"
            />
            <label>Email:</label>
            <input
                className="text-black"
                required
                name="email"
                type="email"
                placeholder="Enter your Email"
            />
            <label>Password:</label>
            <input
                className="text-black"
                required
                name="password"
                type="password"
                placeholder="Enter your Password"
            />
            <button
                className='bg-white rounded-lg  text-black font-semibold text-xl px-2 w-1/2 self-center'
                type="submit">Register</button>
        </form>
    )
}

export default RegisterForm