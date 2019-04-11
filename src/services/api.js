import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dikz-oministack-backend.herokuapp.com'
});

export default api;