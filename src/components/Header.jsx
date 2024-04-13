import { useAuth } from '../context/authContext'
import { Link } from 'react-router-dom'
import { FaPencil } from "react-icons/fa6";

function Header() {
    const { user, logOutUser } = useAuth()

    const logOut = () => {
        logOutUser()
    }
    return (
        user ?
            <nav className='h-[10vh] text-xs md:text-lg font-semibold px-1'>
                <ul className='flex gap-2 items-center justify-between py-2 '>
                    <li>
                        <Link to="/" className="">
                            <img src='/logo.png' className='w-24 xs:w-24 md:w-32 ' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/feed" className="">Feed</Link>
                    </li>
                    <li>
                        <Link to="/profile" className="">Profile</Link>
                    </li>
                    <li className='flex items-center gap-1 border-[0.5px] border-[#35262e] px-3 rounded-full'>
                        <FaPencil size={15} />
                        <Link to="/create" className="">
                            Write</Link>
                    </li>
                    <li>
                        <button
                            className='text-white bg-[#35262e] px-4 py-1 rounded-lg  '
                            onClick={logOut}>Logout</button>
                    </li>
                </ul>
            </nav> :
            null
    )
}

export default Header