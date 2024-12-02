import { useContext } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'

const Navigation = () => {

    const { loggedUser, logout } = useContext(AuthContext)


    return (
        <Navbar bg='dark' data-bs-theme='dark' className='mb-5' expand="lg">

            <Container>

                <Navbar.Brand href="#home">CoastersApp_</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">

                        <Link to={'/'} className='nav-link'>Inicio</Link>
                        <Link to={'/galeria'} className='nav-link'>Galería</Link>

                        {
                            loggedUser &&
                            <>
                                <Link to={'/crear'} className='nav-link'>Crear</Link>
                                <span className='nav-link' onClick={logout}>Cerrar sesión</span>
                            </>
                        }

                        {
                            !loggedUser && <Link to={'/inicio-sesion'} className='nav-link'>Inicio de sesión</Link>
                        }

                    </Nav>

                    <div className="justify-content-end" style={{ color: 'white' }}>
                        Hola, {loggedUser ? loggedUser.usename : 'invitado'}
                    </div>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    )
}

export default Navigation