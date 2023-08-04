// controlar el contenido de head y sus metadatos
import { Helmet } from 'react-helmet'

// prop types
import PropTypes from 'prop-types'

/**
 * @param { properties } props Varias propiedades pueden ser pasadas a este controlador, 
 * ingresa a MetadataController e infórmate de lo que puedes manipular.
 * @returns Controla el metadata de una página, más información {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta | aquí}
 */
const MetadataController = (props) => {
    const { 
        title, 
        type = 'Website', 
        canonical, 
        locale = 'es_PE', 
        keywords, 
        description, 
        refreshTime, 
        themeColor 
    } = props

    return (
        <Helmet>
            {/* Titulo y Titulo OGP */}
            <meta property="og:title" content={title} />
            <title>{ title }</title>

            {/* El url de la página en producción que será usado permanentemente */}
            { canonical && <meta property="og:url" content={canonical} /> }

            {/* Tipo de contenido de la página */}
            { type && <meta property="og:type" content={type} /> }

            {/* Descripción de la página */}
            { description && <meta name="description" content={description} /> }

            {/* Palabras clave */}
            { keywords && <meta name="keywords" content={keywords} /> }

            {/* Refresa la página cada cierto tiempo */}
            { refreshTime && <meta httpEquiv="refresh" content={refreshTime} /> }

            {/* Lenguaje regional */}
            { locale && <meta property="og:locale" content={locale} /> }

            {/* Color que se sugiere al userAgent para cambiar la interfaz del navegador */}
            {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color */}
            { themeColor && <meta name="theme-color" content={themeColor} /> }
        </Helmet>
    )
}

MetadataController.propTypes = {
    title: PropTypes.string, // el título que tendrá la página
    description: PropTypes.string, // La descripción de el contenido de la página
    canonical: PropTypes.string, // el enlace de producción de la página
    locale: PropTypes.string, // código regional de un idioma
    type: PropTypes.string, // website, article, book, dependiendo del contenido
    keywords: PropTypes.string, // se debe separar cada palabra clave con espacios
    refreshTime: PropTypes.number, // se debe separar cada palabra clave con espacios
    themeColor: PropTypes.string // código hexadecimal de un color
}

export default MetadataController