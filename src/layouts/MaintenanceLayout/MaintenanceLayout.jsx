import { Text } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

const MaintenanceLayout = () => {
    return (
        <div>
            <Text m='0' mb='.4em' fontSize='2em' color='var(--shadow-clear)'>Matenimiento</Text>
            <Outlet/>
        </div>
    )
}

export default MaintenanceLayout
