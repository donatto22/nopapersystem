import { Input, FormControl, FormLabel, Select, Button, Stack, Table, TableCaption, Thead, Tbody, Tr, Th, Td, Tfoot, TableContainer } from '@chakra-ui/react';
import './docmesapartes.css';
import { AiOutlineCalendar } from 'react-icons/ai';
import { useRef } from 'react';

const DocMesaPartes = () => {
  const tramiteInputRef = useRef(null);
  const desdeInputRef = useRef(null);
  const hastaInputRef = useRef(null);
  const asuntoInputRef = useRef(null);
  const nrodocInputRef = useRef(null);
  const instiRemiInputRef = useRef(null);

  return (
    <>
      <div className="form-group col-md-1" id='docmesapartes'>
        <label>Nº Trámite:</label>
        <Input ref={tramiteInputRef} placeholder="Tramite" size="md" />
      </div>
      <div className="form-group col-md-2">
        <label>Desde:</label>
        <div className="input-group f-init">
          <div className="input-group-addon">
            <AiOutlineCalendar
              size={20}
              color="white"
              onClick={() => desdeInputRef.current && desdeInputRef.current.focus()}
            />
            <Input ref={desdeInputRef} placeholder="Inicio" size="md" />
          </div>
        </div>
      </div>
      <div className="form-group col-md-2">
        <label>Hasta:</label>
        <div className="input-group f-fin">
          <div className="input-group-addon">
            <AiOutlineCalendar
              size={20}
              color="white"
              onClick={() => hastaInputRef.current && hastaInputRef.current.focus()}
            />
            <Input ref={hastaInputRef} placeholder="Final" size="md" />
          </div>
        </div>
      </div>
      <div className="form-group col-md-1">
        <FormControl>
          <FormLabel>Tipo Documento:</FormLabel>
          <Select placeholder="Selecionar Tipo">
            <option>ACTA</option>
            <option>ADENDA</option>
          </Select>
        </FormControl>
      </div>
      <div className="form-group col-md-1">
        <label>Asunto:</label>
        <Input ref={asuntoInputRef} placeholder="Asunto" size="md" />
      </div>
      <div className="form-group col-md-1">
        <label>Nro de Documento:</label>
        <Input ref={nrodocInputRef} placeholder="Nro Documento" size="md" />
      </div>
      <div className="form-group col-md-1">
        <FormControl>
          <FormLabel>Procedimiento Tupa:</FormLabel>
          <Select placeholder="Selecione:">
            <option>ACTA</option>
            <option>ADENDA</option>
          </Select>
        </FormControl>
      </div>
      <div className="form-group col-md-1">
        <FormControl>
          <FormLabel>Oficina:</FormLabel>
          <Select placeholder="Selecione:">
            <option>ACTA</option>
            <option>ADENDA</option>
          </Select>
        </FormControl>
      </div>
      <div className="form-group col-md-1">
        <label>Institucion / Remitente:</label>
        <Input ref={instiRemiInputRef} placeholder="Institucion / Remitente" size="md" />
      </div>
      <div className="button-options-ed">
        <Stack spacing={10} direction="row" align="center">
          <Button colorScheme="teal" size="xs">
            Buscar
          </Button>
          <Button colorScheme="teal" size="sm">
            Restablecer
          </Button>
          <Button colorScheme="teal" size="md">
            a Excel
          </Button>
          <Button colorScheme="teal" size="lg">
            a PDF
          </Button>
        </Stack>
      </div>

      <div className="row">
        <label>Total de Registros: </label>

      </div>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Numero de Tramite</Th>
              <Th>Tipo de Documento</Th>
              <Th>Institucion / Remitente</Th>
              <Th>Asunto / TUPA</Th>
              <Th>Oficina Destino</Th>
              <Th>Opciones</Th>
              
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>156156</Td>
              <Td>masfsafaf</Td>
              <Td>afsafsasaf</Td>
              <Td>afsafsasaf</Td>
              <Td>afsafsasaf</Td>
              <Td>afsafsasaf</Td>
            </Tr>
            <Tr>
              <Td>156156</Td>
              <Td>masfsafaf</Td>
              <Td>afsafsasaf</Td>
              <Td>afsafsasaf</Td>
              <Td>afsafsasaf</Td>
              <Td>afsafsasaf</Td>
            </Tr>
            <Tr>
              <Td>156156</Td>
              <Td>masfsafaf</Td>
              <Td>afsafsasaf</Td>
              <Td>afsafsasaf</Td>
              <Td>afsafsasaf</Td>
              <Td>afsafsasaf</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DocMesaPartes;
