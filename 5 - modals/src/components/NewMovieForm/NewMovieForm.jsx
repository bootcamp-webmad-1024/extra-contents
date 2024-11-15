import { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

const NewMovieForm = ({ closeModal }) => {

    const [movieData, setMovieData] = useState({
        title: '',
        director: '',
        rating: 0,
        hasOscars: false
    })

    const handleMovieChange = e => {
        const { name, value, checked, type } = e.target
        const result = type === 'checkbox' ? checked : value
        setMovieData({ ...movieData, [name]: result })
    }

    const handleSubmit = e => {
        e.preventDefault()
        closeModal()
    }

    return (

        <div className="NewMovieForm">

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="titleField">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" value={movieData.title} onChange={handleMovieChange} name={'title'} />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="ratingField">
                            <Form.Label>Puntuación</Form.Label>
                            <Form.Control type="number" value={movieData.rating} onChange={handleMovieChange} name={'rating'} />
                        </Form.Group>
                    </Col>

                    <Col>

                        <Form.Group className="mb-3" controlId="directorField">
                            <Form.Label>Director</Form.Label>
                            <Form.Control type="text" value={movieData.director} onChange={handleMovieChange} name={'director'} />
                        </Form.Group>
                    </Col>

                </Row>

                <Form.Group className="mb-3" controlId="oscarsField">
                    <Form.Check type="checkbox" label="¿Ganó Oscar?" checked={movieData.hasOscars} onChange={handleMovieChange} name={'hasOscars'} />
                </Form.Group>

                <div className="d-grid mt-5">
                    <Button variant="dark" type="submit">Crear película</Button>
                </div>

            </Form>

        </div>
    )
}

export default NewMovieForm