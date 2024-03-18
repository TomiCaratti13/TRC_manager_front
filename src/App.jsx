import { Navigate, Route, Routes } from 'react-router'
import LandingPage from './pages/landing/LandingPage.jsx'
import Home from './pages/landing/Home.jsx'
import Login from './pages/landing/Login.jsx'
import Register from './pages/landing/Register.jsx'
import Super from './pages/super/Super'
import Dashboard from './pages/super/Dashboard'
import Instituciones from './pages/super/Instituciones'
function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
      <Route path='/super' element={<Super />} >
        <Route index element={<Dashboard />} />
        <Route path='instituciones' element={<Instituciones />} />
      </Route>
      <Route path='*' element={<Navigate to="/" />} />
    </Routes >
  )
}

export default App
