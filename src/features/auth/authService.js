import axios from 'axios'
import { SiDaf } from 'react-icons/si'

const API_URL = 'http://localhost:8000/api/users/'

const register = async (userData) => {
    const response = await axios.post(API_URL + 'register', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register
}

export default authService