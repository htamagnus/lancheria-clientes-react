import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'
import './styles/stylesGlobals.scss'
import ProfilePage from './pages/Profile/ProfilePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  )
}
