import { Link } from "react-router-dom"
import { useAuth } from "../context/authContext"
import { useBlogs } from "../context/blogsContext"

function FeedPage() {
    const { current, remove } = useBlogs()
    const { user } = useAuth()
    return (
        <section className="">
            <ul className="text-center  grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
                {current.length > 0 && current.map((blog) => (

                    <li
                        className="flex justify-center gap-3 h-32 rounded-lg border-[1px] border-[#35262e]  flex-col p-2"
                        key={blog.slug}>
                        <Link to={`/blog/${blog.slug}`}>
                            <h1 className="font-semibold">{blog.title}</h1>
                            <p className="truncate">{blog.content}</p>
                            <p>Written By : {blog.author.toUpperCase()}</p>
                        </Link>
                        {
                            blog.userId === user.$id ?
                                <button
                                    className='text-white w-1/2 self-center bg-[#35262e] px-4 py-1 rounded-lg  '
                                    onClick={() => remove(blog.$id)}>Delete</button> : null
                        }
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default FeedPage