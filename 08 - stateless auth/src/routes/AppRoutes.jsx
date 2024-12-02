import { Routes, Route } from 'react-router-dom'
import CoastersGalleryPage from '../pages/CoastersGalleryPage/CoastersGalleryPage'
import CoasterDetailsPage from '../pages/CoasterDetailsPage/CoasterDetailsPage'
import NewCoasterPage from '../pages/NewCoasterPage/NewCoasterPage.jsx'
import LoginPage from '../pages/LoginPage/LoginPage.jsx'

const AppRoutes = () => {

    return (
        <div className="AppRoutes">

            <Routes>
                <Route path={'/'} element={<h1>INICIO</h1>} />
                <Route path={'/galeria'} element={<CoastersGalleryPage />} />
                <Route path={'/detalles/:id'} element={<CoasterDetailsPage />} />
                <Route path={'/crear'} element={<NewCoasterPage />} />

                <Route path={'/inicio-sesion'} element={<LoginPage />} />
                <Route path={'/perfil'} element={<h1>PERFIL</h1>} />
            </Routes>

        </div>
    )
}

export default AppRoutes