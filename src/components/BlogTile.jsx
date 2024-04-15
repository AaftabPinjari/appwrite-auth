/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import { useAuth } from "../context/authContext"
import { useBlogs } from "../context/blogsContext"

function BlogTile({ blog }) {
    const { user } = useAuth()
    const { remove } = useBlogs()
    return (
        <li
            className="flex justify-center gap-3 h-48 rounded-lg border-[1px] border-[#35262e]  flex-col p-2">
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
    )
}

export default BlogTile