import { useContext, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import NewMovieForm from "../../components/NewMovieForm/NewMovieForm"
import { ThemeContext } from "../../contexts/theme.context"

const HomePage = () => {

    const [showModal, setShowModal] = useState(false)

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <div className="HomePage">

                <h1>Inicio</h1>

                <hr />

                <Button variant={theme} onClick={() => setShowModal(true)}>Crear nueva montaña rusa</Button>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva montaña rusa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewMovieForm closeModal={() => setShowModal(false)} />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default HomePage