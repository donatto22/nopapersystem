import { useRef } from 'react'
import './pdfmodal.css'

import { AiOutlineFilePdf } from 'react-icons/ai'
import PropTypes from 'prop-types'

// chakra
import { Box, Button, FormControl, FormLabel, Input, useDisclosure } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'

// conversor
import convertTableToPdf from '../../helpers/tableConverter/convertTableToPdf'

const PdfModal = ({ tableReference }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const nameFileInputRef = useRef(null)

    return (
        <>
            <Button onClick={onOpen} className='openModal' padding='8px 16px'>
                <Box display='flex' mr='10px'><AiOutlineFilePdf /></Box>
                Convertir a pdf
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay id='modalOverlay' />
                <ModalContent className='modalContent'>
                    <ModalHeader fontSize='24px'>Convertir a PDF</ModalHeader>
                    <ModalCloseButton id='modalCloseButton' />
                    <ModalBody my='1em' width='90%'>
                        <FormControl mb='1em'>
                            <FormLabel color='var(--default-shadow-gray)' mb='10px' fontSize='16px'>Nombre del documento</FormLabel>
                            <Input maxLength='30' placeholder='lista de frutas' id='inputModal' fontSize='18px' ref={nameFileInputRef}/>
                        </FormControl>

                        <FormControl>
                            <FormLabel color='var(--default-shadow-gray)' mb='10px' fontSize='16px'>Estilo de la tabla</FormLabel>
                            <select id='selectModal'>
                                <option value='1' selected>Filas coloreadas</option>
                                <option value='2'>Grilla</option>
                                <option value='3'>Sin estilos (plano)</option>
                            </select>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button mr='10px' onClick={onClose} className='buttonFooterModal'>
                            Cerrar
                        </Button>
                        <Button className='buttonFooterModal' onClick={() => { convertTableToPdf(tableReference, nameFileInputRef.current.value) }}>Descargar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

PdfModal.propTypes = {
    tableReference: PropTypes.object.isRequired
}

export default PdfModal