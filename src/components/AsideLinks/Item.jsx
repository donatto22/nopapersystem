import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"
import PropTypes from 'prop-types'

const Item = (props) => {
    const  { icon, text, list, marginBotton } = props
    
    return (
        <AccordionItem color='white' mb={marginBotton}>
            <AccordionButton bgColor='transparent' color='white' p='0' pb='10' border='0' cursor='pointer' className='accordion-button-hover'>
                <Box flex='1' textAlign='left' className='accordion-button-link'>
                    { icon } { text }
                </Box>
                <AccordionIcon />
            </AccordionButton>

            <AccordionPanel ml='20px' mt='10'>
                { list }
            </AccordionPanel>
        </AccordionItem>
    )
}

Item.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.string,
    list: PropTypes.element,
    marginBotton: PropTypes.string
}

export default Item