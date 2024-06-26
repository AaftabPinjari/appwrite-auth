import { Outlet, Navigate } from "react-router";
import { useAuth } from "../context/authContext";

const ProtectedRoutes = () => {

    const { user } = useAuth();

    return user ? <Outlet /> : <Navigate to='/form' />
}

export default ProtectedRoutes