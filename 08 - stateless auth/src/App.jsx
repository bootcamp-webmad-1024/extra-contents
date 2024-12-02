import './App.css'
import DELAYEXAMPLE from './components/DELAYEXAMPLE/DELAYEXAMPLE'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'

const App = () => {

  return (
    <div className="App">
      <Navigation />
      <DELAYEXAMPLE />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App