import { createContext, useState } from "react"

const ThemeContext = createContext()

function ThemeProviderWrapper(props) {

    const [theme, setTheme] = useState('regular-contrast')

    const toggleTheme = () => {
        theme === 'regular-contrast' && setTheme('high-contrast')
        theme === 'high-contrast' && setTheme('regular-contrast')
    }

    return (
        <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProviderWrapper }