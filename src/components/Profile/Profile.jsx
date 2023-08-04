import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import './profile.css'

import { LuLogOut } from 'react-icons/lu'
import PropTypes from "prop-types"

const Profile = ({ logoutFunction }) => {
    return (
        <div id="profile-menu" >
            <Menu borderRadius='20px'>
                <MenuButton>
                    Profile
                </MenuButton>

                <div id="menu-list">
                    <MenuList w='200px' border='4px solid var(--div-dark)' bgColor='var(--div)' borderRadius='6px' color='white' className="test" zIndex='10'>
                        <MenuItem my='10' padding='1em' border='0' bgColor='transparent'>Oficina</MenuItem>
                        <MenuItem my='10' padding='0 0 1em 1em' border='0' bgColor='transparent'>Usuario</MenuItem>
                        <MenuItem my='10' padding='0 0 1em 1em' border='0' bgColor='transparent'>Perfil</MenuItem>
                        <MenuItem my='10' padding='0 0 1em 1em' border='0' bgColor='transparent' onClick={logoutFunction}>
                            <LuLogOut/>
                            <span style={{ marginLeft: 10 + 'px' }}>Cerrar Sesión</span>
                        </MenuItem>
                    </MenuList>
                </div>
            </Menu>
        </div>
    )
}

Profile.propTypes = {
    logoutFunction: PropTypes.func.isRequired
}

export default Profile