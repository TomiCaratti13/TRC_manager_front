import { Link } from "react-router-dom"

function Login() {
  return (
    <>
    <div>Login</div>
    <Link to='/super'>Admin</Link>
    <br />
    <Link to='/register'>Register</Link>
    </>
  )
}

export default Login