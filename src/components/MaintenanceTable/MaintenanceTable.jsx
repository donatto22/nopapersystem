import { Button, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { BiSolidTrashAlt } from "react-icons/bi"
import { FiEdit } from "react-icons/fi"

import './table.css'

import PropTypes from 'prop-types'
import PdfModal from "../TableConverters/PdfModal"
import { useRef } from "react"
import { FirstLetterInCapitalize } from "../../helpers/textFunctions"

// eslint-disable-next-line no-unused-vars
const MaintenanceTable = ({ data, endpoint, tableCaption, columns }) => {
    const tableref = useRef(null)

    return (
        <>
            <PdfModal tableReference={tableref} />

            <TableContainer border='4px solid var(--div)' backdropFilter='blur(100px)' bgColor='var(--div-dark-transparent)' width='80%' margin='0 auto' borderRadius='1em' color='var(--default-shadow-gray)' p='2em'>
                <Table variant='simple' pointerEvents='touch' width='100%' ref={tableref}>
                    <TableCaption>{tableCaption}</TableCaption>
                    <Thead borderBottom='2px solid white'>
                        <Tr color='var(--shadow-clear)' mb='1em'>
                            {/* se hace un recorrido a las columnas para colocarlas en la tabla */}
                            {
                                columns.map(element => {
                                    return <Th key={element} textAlign='left' pr='2em'>{ FirstLetterInCapitalize(element) }</Th>
                                })
                            }
                            <Th textAlign='right'>Opciones</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            // se hace recorrido a la data, por cada objeto se coloca una fila
                            data.data.map(element => (
                                <Tr key={element.id}>
                                    {
                                        // se hace recorrido a las columnas para del objeto que se
                                        // colocará en la fila obtener su dato por cada columna
                                        columns.map(column => (
                                            <>
                                                <Td>{element[column]}</Td>
                                            </>
                                        ))
                                    }
                                    <Td pt='1em' w='100%' display='flex' justifyContent='end' gap='.4em'>
                                        <Button className="table-button table-button-delete"><BiSolidTrashAlt /></Button>
                                        <Button className="table-button table-button-edit"><FiEdit /></Button>
                                    </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                    <Tfoot>
                        <Tr color='var(--shadow-clear)'>
                            {/* se hace un recorrido a las columnas para colocarlas en la tabla */}
                            {
                                columns.map(element => {
                                    return <Th key={element} textAlign='left'>{ FirstLetterInCapitalize(element)} </Th>
                                })
                            }
                            <Th textAlign='right' pt='1em'>Opciones</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    )
}

MaintenanceTable.propTypes = {
    data: PropTypes.object,
    endpoint: PropTypes.string,
    tableReference: PropTypes.element,
    tableCaption: PropTypes.string,
    columns: PropTypes.object
}

export default MaintenanceTable
