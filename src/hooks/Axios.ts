import axios, {AxiosInstance} from "axios";

const Axios : AxiosInstance = axios.create({
    baseURL: 'http://192.168.1.7:8080',
    headers: {
        'content-type': 'application/json'
    }
});

export default Axios;