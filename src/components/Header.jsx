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
            <nav className='h-[10vh] text-xs md:text-lg   font-semibold px-1 py-2'>
                <ul className='flex gap-2 items-center justify-between'>
                    <li>
                        <Link to="/" className="">
                            <h1 className='text-lg md:text-2xl font-serif font-bold text-[#35262e]' >HASHBLOG</h1>
                        </Link>
                    </li>
                    <li>
                        <Link to="/feed" className="">Feed</Link>
                    </li>
                    <li>
                        <Link to="/profile" className="">Profile</Link>
                    </li>
                    <li className='flex items-center  border-[0.5px] border-[#35262e] px-2  rounded-full'>
                        <FaPencil className='mr-[2px]' size={12} />
                        <Link to="/create" className="">Write</Link>
                    </li>
                    <li>
                        <button
                            className='text-white bg-[#35262e] px-3 py-1 rounded-lg'
                            onClick={logOut}>Logout</button>
                    </li>
                </ul>
            </nav> :
            null
    )
}

export default Header;