import { useAuth } from "../context/authContext"
import { useBlogs } from "../context/blogsContext"
import BlogTile from "../components/BlogTile"

function ProfilePage() {
    const { user } = useAuth()
    const { current } = useBlogs()

    const userBlogs = current.filter(item => item.userId === user.$id)
    // console.log(user)

    return (
        <section className=" flex flex-col items-center">
            <h1 className="text-xl font-bold my-10">Blogs Written By You !</h1>
            {
                userBlogs && userBlogs.length > 0 ?
                    <ul className="text-center md:w-3/4  grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
                        {userBlogs.map((blog) => (
                            <BlogTile key={blog.slug} blog={blog} />
                        ))}
                    </ul> : <h1>{user.name} Have No Blogs</h1>
            }</section>
    )
}

export default ProfilePage