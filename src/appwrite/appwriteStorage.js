import { Client, Storage, ID } from "appwrite";

const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECTID);

const storage = new Storage(client);

const promise = storage.createFile(
    import.meta.env.VITE_APPWRITE_BUCKETID,
    ID.unique(),
    document.getElementById('uploader').files[0]
);

promise.then(function doThis(response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});


