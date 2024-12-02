import { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

const NewMovieForm = () => {

    const [movieData, setMovieData] = useState({
        title: '',
        director: '',
        rating: 0,
        hasOscars: false
    })

    // Un estado aparte para los objetos anidados
    const [specs, setSpecs] = useState({
        format: '',
        duration: 0
    })

    const handleMovieChange = e => {
        const { name, value, checked, type } = e.target
        const result = type === 'checkbox' ? checked : value
        setMovieData({ ...movieData, [name]: result })
    }

    const handleSpecsChange = e => {
        const { name, value } = e.target
        setSpecs({ ...specs, [name]: value })
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        const reqPayload = {        // Conformamos manualmente el payload para enviar a la API
            ...movieData,
            specs: specs
        }

        console.log('Este será el payload a enviar:', reqPayload)
    }

    return (

        <div className="NewMovieForm mt-5">

            <Row>
                <Col md={{ span: 6, offset: 3 }}>

                    <Form onSubmit={handleFormSubmit}>

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

                            <Col>
                                <Form.Group className="mb-3" controlId="durationField">
                                    <Form.Label>Duración</Form.Label>
                                    <Form.Control type="number" value={specs.duration} onChange={handleSpecsChange} name={'duration'} />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3" controlId="formatField">
                                    <Form.Label>Formato</Form.Label>
                                    <Form.Control type="number" value={specs.format} onChange={handleSpecsChange} name={'format'} />
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
                </Col>
            </Row>




        </div>
    )
}

export default NewMovieForm