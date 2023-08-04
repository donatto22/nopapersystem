import { FormControl, FormErrorMessage, Input, Box, InputGroup, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { FaUser, FaLock } from 'react-icons/fa'
import authToken from '../../helpers/authToken'
import axios from 'axios'

import './formlogin.css'

const FormLogin = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const values = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        const url = 'https://api-ecommerce.ed.team/api/v1/public/login'

        axios.post(url, values).then(resp => {  
            console.log(resp)

            authToken.setToken(resp.data.data.token)
            navigate('/')

        }).catch((err) => {
            console.log(err.response)
        })
    }

    return (
        <>
        <Box className='boxlogin'/>
        <Box w='300px' m='auto' height bgColor='#04040536' padding='3em 4em' borderRadius='10px' zIndex='10' className='filter-blur'>
            <form onSubmit={handleSubmit}>
                <FormControl mb='40' border='1px' borderColor='purple.400'>
                    <InputGroup fontSize='1.2em' display='flex' alignItems='center'>
                        <FaUser color='#04040580' />
                        <Input w='100%' color='white' bgColor='transparent' py='.6em' px='1em' placeholder='Usuario' ml='10'
                            borderTop='0' borderLeft='0' borderRight='0' borderColor='#040405' name='email' className='placeholder-white'/>
                    </InputGroup>
                </FormControl>

                <FormControl mb='40'>
                    <InputGroup fontSize='1.2em' display='flex' alignItems='center'>
                        <FaLock color='#04040580' />
                        <Input w='100%' color='white' bgColor='transparent' py='.6em' px='1em' placeholder='Contraseña' ml='10'
                            borderTop='0' borderLeft='0' borderRight='0' borderColor='#040405' name='password' className='placeholder-white'/>
                    </InputGroup>
                </FormControl>

                <FormControl>
                    <Button w='100%' py='.6em' borderRadius='6px' border='0' color='white' fontStyle='bold'
                        bgColor='#04040550' variant='solid' cursor='pointer' type='submit'>
                        Ingresar
                    </Button>
                </FormControl>
            </form>
        </Box>
        </>
    )
}

export default FormLogin
