import CoasterCard from '../CoasterCard/CoasterCard.jsx'
import { Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'

const CoastersList = () => {

    const API_URL = 'http://localhost:5005'

    const [coasters, setCoasters] = useState([])

    useEffect(() => {
        fetchCoasters()
    }, [])

    const fetchCoasters = () => {

        axios
            .get(`${API_URL}/coasters`)
            .then(response => setCoasters(response.data))
            .catch(err => console.log(err))
    }

    return (
        <Row>
            {
                coasters.map(elm => {
                    return (
                        <Col lg={{ span: 3 }} md={{ span: 6 }} key={elm._id}>
                            <CoasterCard {...elm} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default CoastersList