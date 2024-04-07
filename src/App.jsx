import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import ProtectedRoutes from "./utils/ProtectedRoutes"
import ErrorPage from "./pages/ErrorPage"
import ProfilePage from "./pages/ProfilePage"
import RegisterPage from "./pages/RegisterPage"
import AuthProvider from "./context/authContext"
import LoginPage from "./pages/LoginPage"
import Header from "./components/Header"

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/login" element={<LoginPage />} />
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