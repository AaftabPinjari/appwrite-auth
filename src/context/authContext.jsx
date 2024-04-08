/* eslint-disable react/prop-types */
import { useContext, createContext, useState, useEffect } from "react";
import { account } from '../appwrite/appwriteAuth'
import { ID } from "appwrite";
import { useNavigate } from "react-router";

const authContext = createContext()

export default function AuthProvider({ children }) {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    //login
    const loginUser = async (userInfo) => {
        setLoading(true)
        try {
            await account.createEmailPasswordSession(userInfo.email, userInfo.password)
            // console.log(response);
            let accountDetails = await account.get();
            setUser(accountDetails)
            navigate('/')
        } catch (error) {
            console.error(error)
            setError(error)
        }
        setLoading(false)
    }

    //logout
    const logOutUser = async () => {
        await account.deleteSession('current')
        setUser(null)
    }

    //register
    const registerUser = async (userInfo) => {
        setLoading(true)

        try {

            await account.create(ID.unique(), userInfo.email, userInfo.password, userInfo.name);

            await account.createEmailPasswordSession(userInfo.email, userInfo.password)
            let accountDetails = await account.get();
            setUser(accountDetails)
            navigate('/')
        } catch (error) {
            setError(error)
            console.error(error)
        }

        setLoading(false)

    }


    //get status
    const getUser = async () => {
        setLoading(true)
        try {
            let accountDetails = await account.get();
            setUser(accountDetails)
        } catch (error) {
            setError(error)
            console.error(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        getUser()
    }, [])



    const contextData = {
        user,
        loginUser,
        logOutUser,
        registerUser,
        error
    }
    return (
        <authContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </authContext.Provider>
    )
}


export const useAuth = () => {
    return useContext(authContext)
}