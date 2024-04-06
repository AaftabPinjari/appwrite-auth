import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <section className='min-h-screen flex flex-col items-center justify-center gap-3'>
            <h1>The Page you are looking for is not Found!</h1>
            <Link
                className='bg-white rounded-lg text-black font-bold text-xl px-2 py-1'
                to='/'>Go to Home</Link>
        </section>
    )
}

export default ErrorPage