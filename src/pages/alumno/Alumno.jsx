import { Outlet } from "react-router"
import { Link } from "react-router-dom"

function Alumno() {
  return (
    <>
      <div>Alumno</div>
      <Link to='/'>Salir</Link>
      <br />
      <br />
      <Outlet />
    </>
  )
}

export default Alumno