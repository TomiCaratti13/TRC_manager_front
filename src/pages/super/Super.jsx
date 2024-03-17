import { Outlet } from "react-router"

function Super() {
  return (
    <>
      <div>Super</div>
      <Outlet />
    </>
  )
}

export default Super