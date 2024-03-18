import { Link } from "react-router-dom"
import Institucion from '../../utils/mock/Institucion.json'

function Login() {

  const registro = Institucion.registro;

  return (
    <>
    <div>Login</div>
    <br />
    <br />
    <Link to='/super'>Admin</Link>
    <br />
    {/* <Link to={`/${registro}/administrativo`}>Administrativo</Link> */}
    <Link to='/pt-092/administrativo'>Administrativo</Link>
    <br />
    <br />
    <Link to='/register'>Register</Link>
    </>
  )
}

export default Login