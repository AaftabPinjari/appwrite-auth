import { useAuth } from '../context/authContext'
import { Link } from 'react-router-dom'

function Header() {
    const { user, logOutUser } = useAuth()

    const logOut = () => {
        logOutUser()
    }
    return (
        user ?
            <nav className='h-[10vh] '>
                <ul className='flex justify-evenly items-center py-2'>
                    <li>
                        <Link to="/" className="">{user.name}</Link>
                    </li>
                    <li>
                        <Link to="/" className="">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile" className="">Profile</Link>
                    </li>
                    <li>
                        <button
                            className=' text-black font-semibold  '
                            onClick={logOut}>Logout</button>
                    </li>
                </ul>
            </nav> :
            null
    )
}

export default Header