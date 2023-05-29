import axios from 'axios';

export const API_URL = 'http://1532773-cx56354.twc1.net/api/v1/'
const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})


$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $api;