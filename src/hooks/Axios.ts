import axios, {AxiosInstance} from "axios";

const Axios : AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'content-type': 'application/json'
    }
});

export default Axios;