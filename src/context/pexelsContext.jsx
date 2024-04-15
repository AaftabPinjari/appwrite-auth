import { createContext, useContext } from "react";
import { createClient } from 'pexels';


const PexelsContext = createContext()

export const usePexels = () => {
    return useContext(PexelsContext);
}

export function PexelsProvider({ children }) {

    const client = createClient('tVbxcM2ViR4ghFvw68qeRECgAPXXzPRw68SPV6wud9BIKSaUGTzxdkXj');


    const contextData = {
        client
    }
    return (
        <PexelsContext.Provider value={contextData}>
            {children}
        </PexelsContext.Provider>
    )
}