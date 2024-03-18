import { Navigate, Route, Routes } from 'react-router'
import LandingPage from './pages/landing/LandingPage.jsx'
import Home from './pages/landing/Home.jsx'
import Login from './pages/landing/Login.jsx'
import Register from './pages/landing/Register.jsx'
import Super from './pages/super/Super.jsx'
import Dashboard from './pages/super/Dashboard.jsx'
import Instituciones from './pages/super/Instituciones.jsx'
import Administrativo from './pages/administrativo/Administrativo.jsx'
import DashboardAdmin from './pages/administrativo/DashboardAdmin.jsx'
import Carreras from './pages/administrativo/Carreras.jsx'
import Docentes from './pages/docente/Docente.jsx'
import DashboardDoc from './pages/docente/DashboardDoc.jsx'
import Materias from './pages/docente/Materias.jsx'
import Cursos from './pages/alumno/Cursos.jsx'
import DashboardAlum from './pages/alumno/DashboardAlum.jsx'
import Alumno from './pages/alumno/Alumno.jsx'


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
      <Route path='/pt-092/administrativo' element={<Administrativo />} >
        <Route index element={<DashboardAdmin />} />
        <Route path='carreras' element={<Carreras />} />
      </Route>
      <Route path='/pt-092/docentes' element={<Docentes />} >
        <Route index element={<DashboardDoc />} />
        <Route path='materias' element={<Materias />} />
      </Route>
      <Route path='/pt-092/alumnos' element={<Alumno />} >
        <Route index element={<DashboardAlum />} />
        <Route path='cursos' element={<Cursos />} />
      </Route>


      <Route path='*' element={<Navigate to="/" />} />
    </Routes >
  )
}

export default App
