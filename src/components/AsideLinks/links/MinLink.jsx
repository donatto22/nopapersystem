import { Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import PropTypes from 'prop-types'

const MinLink = ({ path = '/', title }) => {
    return (
        <Link to={path} color="white">
            <Box bgColor='transparent' borderRadius='10px' className='accordion-panel-hover'
             padding='10px 0 10px 10px' fontSize='14px' color='white' cursor='pointer' mb='.1em'>
                { title }
            </Box>
        </Link>
    )
}

MinLink.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string
}

export default MinLink
