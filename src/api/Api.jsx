import axios from 'axios';
import {routes} from "../routes";
import {toast} from 'react-toastify';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const excludedEndpoints = ['/api/auth/login', '/api/auth/register'];
        if (!excludedEndpoints.includes(config.url)) {
            const token = localStorage.getItem('jwtToken');
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle 401 Unauthorized response
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('jwtToken');
            window.location.href = routes.login;
        }

        // All errors
        const message = error.response.data.message
        if (message) {
            toast.error(message);
        }

        // Handle 400 Bad Request
        if (error.response && error.response.status === 400) {
            error.response.data.errors.forEach((responseError) => {
                toast.error(responseError.message);
            })
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
