import axios from "axios"
import {getStorage} from './localstorage'

const instance = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization : `${getStorage('token')}`
    }
});

export default instance

