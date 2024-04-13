import { Link } from "react-router-dom"
import { useAuth } from "../context/authContext"
import { useBlogs } from "../context/blogsContext"

function ProfilePage() {
    const { user } = useAuth()
    const { current, remove } = useBlogs()

    const userBlogs = current.filter(item => item.userId === user.$id)
    console.log(userBlogs)

    return (
        <section className=" flex flex-col items-center">
            <h1 className="text-xl font-bold my-10">Blogs Written By You !</h1>
            {
                userBlogs && userBlogs.length > 0 ?
                    <ul className="text-center md:w-3/4  grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
                        {userBlogs.map((blog) => (
                            <li
                                className="flex justify-center gap-3 h-32 rounded-lg border-[1px] border-[#35262e]  flex-col p-2"
                                key={blog.slug}>
                                <Link to={`/blog/${blog.slug}`}>
                                    <h1 className="font-semibold">{blog.title}</h1>
                                    <p className="truncate">{blog.content}</p>
                                    <p>Written By : {blog.author.toUpperCase()}</p>
                                </Link>
                                <button
                                    className='text-white w-1/2 self-center bg-[#35262e] px-4 py-1 rounded-lg  '
                                    onClick={() => remove(blog.$id)}>Delete</button>
                            </li>
                        ))}
                    </ul> : <h1>User Have No Blogs</h1>
            }</section>
    )
}

export default ProfilePage