import { Spinner } from "react-bootstrap"

const Loader = () => {

    return (

        <div className="Loader">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Cargando...</span>
            </Spinner>
        </div>
    )
}

export default Loader