import { Container } from "react-bootstrap"
import NewCoasterForm from "../../components/NewCoasterForm/NewCoasterForm"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"
import { Navigate } from "react-router-dom"

const NewCoasterPage = () => {

    const { loggedUser } = useContext(AuthContext)

    if (!loggedUser) {
        return <Navigate to="/" />
    }

    return (
        <div className="NewCoasterPage">
            <Container>
                <h1>Nueva montaña rusa</h1>
                <hr />
                <NewCoasterForm />
            </Container>
        </div>
    )
}

export default NewCoasterPage