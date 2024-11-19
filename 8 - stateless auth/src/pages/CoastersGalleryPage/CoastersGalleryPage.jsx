import { Button, Container } from 'react-bootstrap'
import CoastersList from '../../components/CoastersList/CoastersList.jsx'

import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context.jsx'

const CoastersGalleryPage = () => {

    const { loggedUser } = useContext(AuthContext)

    return (
        <div className="CoastersGalleryPage">

            <Container>

                <h1>Galería de montañas rusas</h1>

                <hr />

                {loggedUser && <Button as={Link} variant='dark' to={'/crear'}>Crear nueva</Button>}

                <CoastersList />

            </Container>

        </div >
    )
}

export default CoastersGalleryPage