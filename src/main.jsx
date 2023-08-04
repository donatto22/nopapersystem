import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import ControlPanel from './pages/controlpanel/ControlPanel'
import Login from './pages/login/Login'

// css
import './libcss/styles.config.css'

// layouts
import ControlPanelLayout from './layouts/ControlPanelLayout/ControlPanelLayout'
import MaintenanceLayout from './layouts/MaintenanceLayout/MaintenanceLayout'

import Principal from './pages/principal/Principal'
import DocMesaPartes from './pages/consultas/DocMesaPartes'

// mantenimientos
import Workers from './pages/mantenimientos/trabajadores/Workers'
import Offices from './pages/mantenimientos/oficinas/Offices'
import Profiles from './pages/mantenimientos/perfiles/Profiles'
import Senders from './pages/mantenimientos/remitentes/Senders'
import Categories from './pages/mantenimientos/categorias/Categories'
import Indications from './pages/mantenimientos/indicaciones/Indications'
import Locations from './pages/mantenimientos/ubicaciones/Locations'
import Documents from './pages/mantenimientos/documentos/documents'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ControlPanelLayout />}>
                <Route index element={<ControlPanel />}/>
                <Route path='principal' element={<Principal />}/>
                <Route path='docmesa' element={<DocMesaPartes />}/>
                <Route path='maintenance' element={<MaintenanceLayout />}>
                    <Route path='profiles' element={<Profiles />} />
                    <Route path='offices' element={<Offices />} />
                    <Route path='workers' element={<Workers />} />
                    <Route path='senders' element={<Senders />} />
                    <Route path='categories' element={<Categories />} />
                    <Route path='indications' element={<Indications />} />
                    <Route path='locations' element={<Locations />} />
                    <Route path='documents' element={<Documents />} />
                </Route>
            </Route>

            <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
)
