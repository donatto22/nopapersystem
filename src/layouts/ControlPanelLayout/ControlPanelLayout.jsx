import { useRef } from "react"
import { Navigate, Outlet } from "react-router-dom"

// componentes
import AsideLinks from "../../components/AsideLinks/AsideLinks"
import Header from "../../components/Header/Header"
import './cpl.css'

import authToken from '../../helpers/authToken'

const ControlPanelLayout = () => {
    let auth = { 'token': authToken.existToken() }

    const asideLinks = useRef(null)

    const toogleMenu = () => {
        document.getElementById('asideLinks').classList.toggle('toggleMenu')
        document.getElementById('min-container').classList.toggle('toggleMenu')
    }

    return (
        auth.rol == 'user' ? (
            <div id="controlpanelayout">
                <Header menuFunction={() => { toogleMenu() }}/>

                <div id="container">
                    <div id="asideLinks" ref={asideLinks}>
                        <AsideLinks />
                    </div>

                    <div id="min-container">
                        <Outlet />
                    </div>
                </div>
            </div>
        ) : <Navigate to='/login'/>
    )
}

export default ControlPanelLayout