import { Outlet } from "react-router"
import { Link } from "react-router-dom"

function Super() {
  return (
    <>
      <div>Super</div>
      <Link to='/'>Salir</Link>
      <Outlet />
    </>
  )
}

export default Super