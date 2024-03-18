import { Link } from "react-router-dom"

function Register() {
  return (
    <>
    <div>Register</div>
    <br />
    <Link to='/login'>Login</Link>
    <br />
    <Link to='/'>Regresar</Link>
    </>
  )
}

export default Register