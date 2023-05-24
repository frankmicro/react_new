import axios from "axios"
import {getToken} from './localstorage'

const instance = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization : `${getToken()}`
    }
});

export default instance

