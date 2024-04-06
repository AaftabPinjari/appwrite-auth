import { Outlet, Navigate } from "react-router";

const ProtectedRoutes = () => {

    const user = false;

    return user ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoutes