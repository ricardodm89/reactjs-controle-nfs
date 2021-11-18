import axios from 'axios';
import BASE_URL from '../environments/environments';

const api = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-type': 'application/json' }
});

export default api;