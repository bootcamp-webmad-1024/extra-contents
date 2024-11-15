import { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import NewMovieForm from "../../components/NewMovieForm/NewMovieForm"

const HomePage = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div className="HomePage">

                <h1>Inicio</h1>

                <hr />

                <Button variant="dark" onClick={() => setShowModal(true)}>Crear nueva montaña rusa</Button>
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