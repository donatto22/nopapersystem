import { Box } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom'

// el componente que contiene el formulario del login
import FormLogin from '../../components/FormLogin/FormLogin'

// el manejador del token
import authToken from '../../helpers/authToken'

// em controlador de metadatos para SEO
import MetadataController from '../../helpers/MetadataController'

// los textos de cada página deberán ir en este archivo
import data from '../../helpers/_texts.json'

const Login = () => {
    let auth = { 'token': authToken.existToken() }

    return (
        ( auth.token == false ? (
            <>
            <MetadataController title={data[0].login.title} description={data[0].login.description}/>
            <Box height='100vh' display='flex' justifyContent='center'>
                <FormLogin />
            </Box>
            </>
        ) : <Navigate to='/'/>)
    )
}

export default Login
