import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <>
      Loguin
      <Button
        component={NavLink}
        to='/register'
      >
        Registrarse
      </Button>
    </>
  )
}
