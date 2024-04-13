import { useBlogs } from "../context/blogsContext"

function FeedPage() {
    const { current } = useBlogs()
    return (
        <section className="w-screen">
            <ul className="text-center  grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
                {current.map((blog) => (

                    <li
                        className="flex justify-center gap-3 h-32 rounded-lg border-[1px] border-[#35262e]  flex-col p-2"
                        key={blog.slug}>
                        <h1 className="font-semibold">{blog.title}</h1>
                        <p className="truncate">{blog.content}</p>
                        <p>Written By : {blog.author.toUpperCase()}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default FeedPage