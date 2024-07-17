import MinLink from "./MinLink"

const LinksMantenimientos = () => {
    return (
        <>
            <MinLink path="maintenance/profiles" title='Perfiles' />
            <MinLink path="maintenance/offices" title='Oficinas' />
            <MinLink path="maintenance/workers" title='Trabajadores' />
            <MinLink path="maintenance/senders" title='Remitentes' />
            <MinLink title='Tipo Documentos' />
            <MinLink path="maintenance/categories" title='Categorías' />
            <MinLink path="maintenance/indications" title='Indicaciones' />
            <MinLink path="maintenance/locations" title='Ubicación' />
            <MinLink path="maintenance/documents" title='Doc. Identidad' />
        </>
    )
}

export default LinksMantenimientos