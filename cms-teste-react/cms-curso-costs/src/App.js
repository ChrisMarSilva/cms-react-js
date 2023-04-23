import { Outlet } from "react-router-dom";
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Container customClass="min-height">
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}