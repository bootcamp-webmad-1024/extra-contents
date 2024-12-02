import { useState } from "react"
import { Form, ListGroup } from "react-bootstrap"

const MoviesGlobalFilter = () => {

    const [filterValue, setFilterValue] = useState('')
    const [filterResults, setFilterResults] = useState([])

    const handleFilterChange = e => {
        const { value } = e.target
        setFilterValue(value)
    }

    // http://localhot:5005/movies?title_like=tibur

    return (
        <div className="MoviesGlobalFilter">
            <Form.Control
                type="text"
                placeholder="Título de película"
                className=" mr-sm-2"
                value={filterValue}
                onChange={handleFilterChange}
            />

            <ListGroup>

                {
                    filterResults.map(elm => {
                        return <ListGroup.Item>{elm.whatever}</ListGroup.Item>
                    })
                }

            </ListGroup>
        </div>
    )
}

export default MoviesGlobalFilter