import { createContext, useState } from "react"

const AuthContext = createContext()

function AuthProviderWrapper(props) {

    const [loggedUser, setLoggedUser] = useState(undefined)

    const login = user => setLoggedUser(user)
    const logout = () => setLoggedUser(undefined)


    return (
        <AuthContext.Provider value={{ loggedUser, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }