/* eslint-disable react/prop-types */
import { useContext, createContext, useState } from "react";
import { account } from '../appwrite/appwriteAuth'
import { ID } from "appwrite";

const authContext = createContext()

export default function AuthProvider({ children }) {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const loginUser = async (userInfo) => {
        const response = await account.createEmailPasswordSession(userInfo.email, userInfo.password)
        console.log(response)
    }
    const logOutUser = () => { }
    const registerUser = (userInfo) => { }
    const getUser = (userInfo) => {

    }




    const contextData = {
        user,
        loginUser,
        logOutUser,
        registerUser,
    }
    return (
        <authContext.Provider value={contextData}>
            {children}
        </authContext.Provider>
    )
}


export const useAuth = () => {
    return useContext(authContext)
}