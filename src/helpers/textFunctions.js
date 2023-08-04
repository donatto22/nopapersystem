/**
 * @param { string } text 
 * @returns Retorna el texto con la primera letra en mayúscula
 */
export const FirstLetterInCapitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}