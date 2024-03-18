
import { Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landing/LandingPage.jsx'
import Home from './pages/landing/Home.jsx'
import Login from './pages/landing/Login.jsx'
import Register from './pages/landing/Register.jsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
      <Route path='*' element={<Navigate to="/" />} />
    </Routes >
  )
}

export default App
