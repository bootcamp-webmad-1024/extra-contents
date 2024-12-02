import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage/HomePage';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from './contexts/theme.context';
import './App.css'

const App = () => {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>

      <Button onClick={toggleTheme}>Contraste {theme === 'regular-contrast' ? 'alto' : 'normal'}</Button>

      <HomePage />
    </div>
  )
}

export default App