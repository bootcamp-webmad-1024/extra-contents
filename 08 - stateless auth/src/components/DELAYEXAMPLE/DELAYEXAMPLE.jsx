import { useEffect, useState } from "react"


const DELAYEXAMPLE = () => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = e => {
        const { value } = e.target
        setInputValue(value)
        // sendValueToApi()             -> OJO! Los cambios de estado son asíncronos, no lo hará después de setInputValue()
    }

    const sendValueToApi = () => {
        console.log('ENVIANDO', inputValue)
    }

    useEffect(() => {
        sendValueToApi()
    }, [inputValue])                // Ejecutamos el efecto en el cambio sobre el estado

    return (
        <>
            <input type="text" onChange={handleInputChange} value={inputValue} />
        </>
    )
}

export default DELAYEXAMPLE