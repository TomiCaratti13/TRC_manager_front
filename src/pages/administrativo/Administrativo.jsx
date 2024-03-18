import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

function Administrativo() {
  return (
    <>
      <div>Administrativo</div>
      <Link to='/'>Salir</Link>
      <br />
      <br />
      <Outlet />
    </>
  )
}

export default Administrativo