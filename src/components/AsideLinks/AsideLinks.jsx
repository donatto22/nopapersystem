import { Link } from "react-router-dom"
import { Accordion, AccordionItem, Box } from "@chakra-ui/react"

import { FiSearch, FiBox } from "react-icons/fi"
import { BiHomeAlt2 } from "react-icons/bi"
import { BsFillInboxFill, BsFillClipboard2DataFill } from "react-icons/bs"

import './asidelinks.css'
import LinksConsultas from "./links/LinksConsultas"
import LinksMantenimientos from "./links/LinksMantenimientos"
import LinksRegistros from "./links/LinksRegistros"
import Item from "./Item"

const AsideLinks = () => {
    return (
        <Accordion allowToggle m='2em 1em'>
            <AccordionItem color='white' mb='1em' className="accordion-item">
                <Link to='/' className="aside-link-hyperlink">
                    <Box className='accordion-button-link'>
                        <BiHomeAlt2 />
                    </Box>
                    
                    Inicio
                </Link>
            </AccordionItem>

            <Item icon={<BsFillClipboard2DataFill /> } text='Registros' list={<LinksRegistros />} marginBotton='1em'/>
            <Item icon={<BsFillInboxFill /> } text='Bandeja' list={'aaa'} marginBotton='1em'/>
            <Item icon={<FiSearch /> } text='Consulta' list={<LinksConsultas />} marginBotton='1em'/>
            <Item icon={<FiBox />} text='Mantenimiento' list={<LinksMantenimientos />} />
        </Accordion>
    )
}

export default AsideLinks