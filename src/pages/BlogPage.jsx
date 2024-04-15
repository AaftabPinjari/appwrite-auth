import { useParams } from 'react-router'
import { useBlogs } from '../context/blogsContext'
import { useEffect, useState } from 'react'

function BlogPage() {
    const param = useParams()
    const { current } = useBlogs()
    const arr = current.filter(item => item.slug === param.id)
    const blog = arr[0]
    const [images, setImages] = useState([])


    const pexels = async () => {
        const res = await fetch(`https://api.pexels.com/v1/search?query=${blog.slug.replace(/-/g, " ")}&page=1&per_page=1`, {
            headers: {
                Authorization: import.meta.env.VITE_PEXELS_API_KEY
            }
        })
        const result = await res.json()
        console.log(result.photos)
        setImages(result.photos)
    }
    useEffect(() => {
        pexels()
        // console.log("again")
    }, [])
    console.log(images);
    return (
        <section className=' flex flex-col items-center justify-start mt-10'>
            {
                images && images.length > 0 ?
                    images.map((image) => (
                        <div key={image.id}>
                            <img src={`${image.src.medium}`} alt={image.id} />
                            {console.log(image.url)}
                        </div>
                    )) : null

            }
            {
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