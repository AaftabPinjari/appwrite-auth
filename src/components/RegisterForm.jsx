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
            className="flex flex-col gap-5"
            onSubmit={handleSubmit} ref={registerForm}>
            <input
                className="border-[0.5px] border-gray-400 p-2 rounded-lg"
                required
                name="name"
                type="text"
                placeholder="Enter your name"
            />
            <input
                className="border-[0.5px] border-gray-400 p-2 rounded-lg"
                required
                name="email"
                type="email"
                placeholder="Enter your Email"
            />
            <input
                className="border-[0.5px] border-gray-400 p-2 rounded-lg"
                required
                name="password"
                type="password"
                placeholder="Enter your Password"
            />
            <button
                className='text-white bg-gradient-to-tr from-blue-700 to-teal-300 px-8 py-2 rounded-lg mb-4 self-center'
                type="submit">Register</button>
        </form>
    )
}

export default RegisterForm