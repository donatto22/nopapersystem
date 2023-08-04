const existToken = () => {
    return localStorage.getItem('token') ? true : false
}

const getToken = () => {
    return localStorage.getItem('token')
}

const setToken = (token) => {
    localStorage.setItem('token', token)
}

const deleteToken = () => {
    localStorage.removeItem('token')
}

export default {
    existToken, getToken, setToken, deleteToken
}