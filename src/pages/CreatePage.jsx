import { useRef } from 'react';
import { useBlogs } from '../context/blogsContext'
import { useAuth } from '../context/authContext';

function CreatePage() {
    const createForm = useRef(null)
    const { add } = useBlogs()
    const { user } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        const userId = user.$id
        const title = createForm.current.title.value
        const slug = title.replace(/ /g, '-').toLowerCase()
        const content = createForm.current.content.value
        const author = user.name
        const blog = { userId, title, slug, content, author }
        add(blog)
    }

    return (
        <form
            className='mt-10 flex flex-col items-center justify-center gap-3'
            onSubmit={handleSubmit} ref={createForm}>
            <input
                className='w-3/4'
                required
                name='title'
                type='text'
                placeholder='Enter title'
            />
            <textarea
                className='h-96 w-3/4'
                required
                name='content'
                type='text'
                placeholder='Enter content'
            />
            <button
                className='text-white bg-[#35262e] px-4 py-1 rounded-lg  '
                type='submit'>Submit</button>
        </form>
    )
}

export default CreatePage