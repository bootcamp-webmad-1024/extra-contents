import { Link } from 'react-router-dom'
import './CoasterCard.css'
import { Button, Card } from "react-bootstrap"

const CoasterCard = ({ id, title, imageUrl }) => {
    return (
        <article className='CoasterCard mb-3'>
            <Card>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className="d-grid">
                        <Button variant='dark' size='sm' as={Link} to={`/detalles/${id}`}>Ver detalles</Button>
                    </div>
                </Card.Body>
            </Card>
        </article>
    )
}

export default CoasterCard