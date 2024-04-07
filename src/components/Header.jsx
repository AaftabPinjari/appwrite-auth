import { useAuth } from '../context/authContext'
import { Link } from 'react-router-dom'

function Header() {
    const { user, logOutUser } = useAuth()

    const logOut = () => {
        logOutUser()
    }
    return (
        user ?
            <nav className='h-[10vh] shadow-lg '>
                <ul className='flex justify-evenly items-center py-2'>
                    <li>
                        <Link to="/" className="header--link">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile" className="header--link">Profile</Link>
                    </li>
                    <li>
                        <button
                            className='bg-white rounded-lg text-black font-semibold text-xl px-2 py-1'
                            onClick={logOut}>Logout</button>
                    </li>
                </ul>
            </nav> :
            <nav className='py-2 shadow-lg flex items-center justify-center h-[10vh]'>
                <Link
                    className='bg-white rounded-lg text-black font-semibold text-xl px-2 py-1'
                    to="/login">Login</Link>
            </nav>
    )
}

export default Header