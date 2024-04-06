import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import ProtectedRoutes from "./utils/ProtectedRoutes"
import ErrorPage from "./pages/ErrorPage"
import ProfilePage from "./pages/ProfilePage"
import RegisterPage from "./pages/RegisterPage"
import AuthProvider from "./context/authContext"

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </AuthProvider>

    </>
  )
}

export default App