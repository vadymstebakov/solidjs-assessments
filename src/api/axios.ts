import axios from 'axios';

export const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    adapter: 'fetch',
});

export const httpPrivate = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    adapter: 'fetch',
});

httpPrivate.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('apiToken');

        config.headers.Authorization = `JWT ${token}`;
        config.headers['X-Requested-With'] = 'XMLHttpRequest';

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
