
import { Route, Routes } from 'react-router-dom'
import Super from './pages/super/Super'
import Dashboard from './pages/super/Dashboard'
import Instituciones from './pages/super/Instituciones'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Super />} >
        <Route index element={<Dashboard />} />
        <Route path='instituciones' element={<Instituciones />} />
      </Route>
      {/* <Route path='/super' element={<Super />} /> */}
    </Routes>
  )
}

export default App
