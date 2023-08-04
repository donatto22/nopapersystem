import MetadataController from '@helpers/MetadataController.jsx'
import MaintenanceTable from "../../../components/MaintenanceTable/MaintenanceTable"

import data from './_data.json'

const Profiles = () => {
    const columns = Object.keys(data.data[0])
    return (
        <>
        {/* botón que convierta la tabla a pdf */}

        <MetadataController title='Mantenimiento de perfiles' />
        {/* <button onClick={() => { exporter.exportAsExcel() }}>xlsx</button> */}
        <MaintenanceTable data={data} columns={columns}/>
        </>
    )
}

export default Profiles
