import { Outlet } from "react-router"
import { Link } from "react-router-dom"

function Docente() {
  return (
    <>
      <div>Docente</div>
      <Link to='/'>Salir</Link>
      <br />
      <br />
      <Outlet />
    </>
  )
}

export default Docente