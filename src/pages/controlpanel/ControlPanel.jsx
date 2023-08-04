import { Box } from "@chakra-ui/react"
import ControlPanelMinCard from "../../components/ControlPanelMinCard/ControlPanelMinCard"

import { LiaFileInvoiceDollarSolid } from 'react-icons/lia'

import './controlpanel.css'

const ControlPanel = () => {
    return (
        <Box className="heightpanel" margin='0 1em 0 0'>
            <Box display='flex' justifyContent='space-between'>
                <ControlPanelMinCard icon={<LiaFileInvoiceDollarSolid />} description='S/ 430.00' title='Facturas'/>
                <ControlPanelMinCard icon={<LiaFileInvoiceDollarSolid />} description='S/ 430.00' title='Facturas'/>
                <ControlPanelMinCard icon={<LiaFileInvoiceDollarSolid />} description='S/ 430.00' title='Facturas'/>
                <ControlPanelMinCard icon={<LiaFileInvoiceDollarSolid />} description='S/ 430.00' title='Facturas'/>               
            </Box>
        </Box>
    )
}

export default ControlPanel