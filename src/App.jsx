
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Login/Register'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App
