import { Box, Text } from "@chakra-ui/react"

const ControlPanelMinCard = ({ icon, title, description }) => {
    return (
        <Box width='300px' height='150px' bgColor='var(--discord-black2)' borderRadius='16px' display='flex'>
            <Box width='80%' height='70%' margin='auto' display='flex' gap='1em'>
                <Box bgColor='var(--discord-black3)' height='100%' width='100px' display='flex' color='white'
                 borderRadius='10px' alignItems='center' justifyContent='center'>
                    <Box display='flex' transform='scale(1.6)'>{ icon }</Box>
                </Box>

                <Box p='1em .6em' color='white'>
                    <Text fontSize='2x1' fontWeight='bold' m='.6em 0'>  { description } </Text>
                    <Text m='0'>  { title } </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default ControlPanelMinCard
