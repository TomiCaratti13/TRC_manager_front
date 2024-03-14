
import { Box, Container } from '@mui/material';
import NavBar from './components/Navbar';

export default function Home() {
  return (
    <>
      <NavBar />
      <Box sx={{ bgcolor: 'lightblue', height:'90vh' }}>
        <Container>
          Home
        </Container>
      </Box>
    </>
  )
}

