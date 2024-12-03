import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const getOwnerView = () => api.get('/owners/view');
export const getEmployeeView = () => api.get('/employees/view');
export const getDriverView = () => api.get('/drivers/view');

export const addOwner = (ownerInfo) => api.post('/owners/add', ownerInfo);
export const addEmployee = (employeeInfo) => api.post('/employees/add', employeeInfo);
export const addDriver = (driverInfo) => api.post('/drivers/add', driverInfo);