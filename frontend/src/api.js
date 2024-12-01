import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const getOwnerView = () => api.get('/owners/view');
export const getEmployeeView = () => api.get('/employees/view');
export const getDriverView = () => api.get('/drivers/view');