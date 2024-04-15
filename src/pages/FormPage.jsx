import { useState } from "react"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"
import { useAuth } from "../context/authContext"
import { Navigate } from "react-router"


function FormPage() {
    const { user } = useAuth()
    const tabs = [
        {
            title: "Sign In",
            content: <LoginForm />

        },
        {
            title: "Sign Up",
            content: <RegisterForm />

        },

    ]

    const [currIndex, setCurrIndex] = useState(0)

    const getcurrIndex = (idx) => {
        setCurrIndex(idx)
    }

    return (
        !user ?
            <section className="flex flex-col items-center justify-center h-[90vh]">
                <h1 className="text-lg md:text-xl font-bold mb-3">Welcome To HashBlog !</h1>
                <div className="bg-white flex flex-col p-8  rounded-xl">
                    <div className="flex gap-2 ">{
                        tabs.map((tab, idx) => (
                            <button
                                onClick={() => getcurrIndex(idx)}
                                className={`${currIndex === idx ? "text-white bg-[#35262e]" : "bg-white"}
                                font-semibold px-8 py-2 rounded-lg  
                                `}
                                key={idx}>{tab.title}</button>
                        ))
                    }</div>
                    <div className="mt-5 justify-self-center">{
                        tabs[currIndex] && tabs[currIndex].content
                    }</div>
                </div>
                <h1 className="text-lg md:text-xl font-bold mt-3">A Project by [ Aaftab Pinjari ] </h1>
            </section> : <Navigate to="/" />
    )
}

export default FormPage