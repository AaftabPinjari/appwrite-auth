import { Client, Databases } from 'appwrite';



const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECTID);

export const databases = new Databases(client);

export default client;