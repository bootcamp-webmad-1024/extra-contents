import { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

const NewMovieForm = () => {

    const [movieData, setMovieData] = useState({
        title: '',
        director: '',
        rating: 0,
        hasOscars: false,
        languages: ['']         // Creamos array con string vacío
    })

    const handleMovieChange = e => {
        const { name, value, checked, type } = e.target
        const result = type === 'checkbox' ? checked : value
        setMovieData({ ...movieData, [name]: result })
    }

    // Capturamos evento para el valor e índice para la posición del array manipulada
    const handleLangChange = (e, idx) => {
        const { value } = e.target
        const langsCopy = [...movieData.languages]
        langsCopy[idx] = value
        setMovieData({ ...movieData, languages: langsCopy })
    }

    // Creamos nueva posición en array para generar nuevo campo
    const addNewLang = () => {
        const langsCopy = [...movieData.languages]
        langsCopy.push('')
        setMovieData({ ...movieData, languages: langsCopy })
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        console.log('Este será el payload a enviar:', movieData)
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

                        <Form.Group className="mb-3" >
                            <Form.Label>Idioma/s</Form.Label>

                            {/* 
                                Iteramos sobre el array para generar un campo por posición
                                El onChange envía  el evento y el índice al handler 
                            */}

                            {
                                movieData.languages.map((eachLang, idx) => {
                                    return (
                                        <Form.Control
                                            className="mb-2"
                                            type="text"
                                            onChange={event => handleLangChange(event, idx)}
                                            value={movieData.languages[idx]}
                                            key={idx}
                                        />
                                    )
                                })
                            }

                            <Button size='sm' variant='dark' onClick={addNewLang}>Añadir nuevo</Button>

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
                </Col>
            </Row>




        </div>
    )
}

export default NewMovieForm