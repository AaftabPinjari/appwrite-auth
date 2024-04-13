import { useParams } from 'react-router'
import { useBlogs } from '../context/blogsContext'

function BlogPage() {
    const param = useParams()
    const { current } = useBlogs()
    const arr = current.filter(item => item.slug === param.id)
    const blog = arr[0]
    // console.log(blog)
    // console.log(param.id)
    return (
        <section className=' flex flex-col items-center justify-start mt-10'>{
            arr && arr.length > 0 ?
                (<div className="flex w-1/2 flex-col gap-3 text-center">
                    <h1 className='tex-xl font-bold'>{blog.title.toUpperCase()}</h1>
                    <p>{blog.content}</p>
                    <h3>{blog.author}</h3>
                </div>
                ) : null}
        </section>

    )
}

export default BlogPage