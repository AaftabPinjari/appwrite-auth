import { createContext, useContext, useEffect, useState } from "react";
import { databases } from "../appwrite/appwriteDB";
import { ID, Query } from "appwrite";
import { useNavigate } from "react-router";

export const IDEAS_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASEID; // Replace with your database ID
export const IDEAS_COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTIONID; // Replace with your collection ID

const BlogsContext = createContext();


export function useBlogs() {
    return useContext(BlogsContext);
}

export function BlogsProvider({ children }) {
    const navigate = useNavigate()
    const [blogs, setBlogs] = useState([]);

    async function add(blog) {
        const response = await databases.createDocument(
            IDEAS_DATABASE_ID,
            IDEAS_COLLECTION_ID,
            ID.unique(),
            blog
        );
        setBlogs((blogs) => [response, ...blogs].slice(0, 10));
        navigate('/feed')
    }

    async function remove(id) {
        await databases.deleteDocument(IDEAS_DATABASE_ID, IDEAS_COLLECTION_ID, id);
        setBlogs((blogs) => blogs.filter((blog) => blog.$id !== id));
        await init(); // Refetch blogs to ensure we have 10 items
    }

    async function init() {
        const response = await databases.listDocuments(
            IDEAS_DATABASE_ID,
            IDEAS_COLLECTION_ID,
        );
        setBlogs(response.documents);
        [Query.orderDesc("$createdAt"), Query.limit(10)]
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <BlogsContext.Provider value={{ current: blogs, add, remove }}>
            {children}
        </BlogsContext.Provider>
    );
}
