import { useBlogs } from "../context/blogsContext"
import BlogTile from "../components/BlogTile"

function FeedPage() {
    const { current } = useBlogs()
    return (
        <section className="flex flex-col items-center">
            <ul className="text-center w-3/4  grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
                {current.length > 0 && current.map((blog) => (
                    <BlogTile key={blog.slug} blog={blog} />
                ))}
            </ul>
        </section>
    )
}

export default FeedPage