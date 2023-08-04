import { AiOutlineMenu } from 'react-icons/ai'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import Profile from '../Profile/Profile'
import authToken from '../../helpers/authToken'
import { useNavigate } from 'react-router-dom'

import './header.css'

const Header = ({ menuFunction }) => {
    const navigate = useNavigate()

    const logout = () => {
        authToken.deleteToken()
        navigate('/login')    
    }

    return (
        <div id="header">
            <div id="header-leftside">
                <img src="/lockerglogo.webp" alt="logo" />
            </div>

            <div id="header-rightside">
                <div className="button-header">
                    <AiOutlineMenu onClick={ menuFunction }/>
                    <BsFillMoonStarsFill />
                </div>

                <div className="modal-profile-header">
                    <Profile logoutFunction={logout} />
                </div>
            </div>
        </div>
    )
}

export default Header
