import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import ProtectedRoutes from "./utils/ProtectedRoutes"
import ErrorPage from "./pages/ErrorPage"
import ProfilePage from "./pages/ProfilePage"
import AuthProvider from "./context/authContext"
import Header from "./components/Header"
import FormPage from "./pages/FormPage"

function App() {

  return (
    <main className="bg-[#f5e7c8] text-[#35262e] min-h-screen ">
      <AuthProvider>
        {/**/}
        <Header />
        <Routes>
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </AuthProvider>

    </main>
  )
}

export default App