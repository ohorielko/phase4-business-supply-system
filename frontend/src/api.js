import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const getOwnerView = () => api.get('/owners/view');
export const getEmployeeView = () => api.get('/employees/view');
export const getDriverView = () => api.get('/drivers/view');
export const getLocationView = () => api.get("/locations/view");
export const displayProductView = () => api.get('/display-product-view');
export const displayServiceView = () => api.get('/display-service-view');

export const addOwner = (ownerInfo) => api.post('/owners/add', ownerInfo);
export const addEmployee = (employeeInfo) => api.post('/employees/add', employeeInfo);
export const addDriver = (driverInfo) => api.post('/drivers/add', driverInfo);
export const addService = (addServiceInfo) => api.post('/add-service', addServiceInfo);

// PUT YOUR CODE HERE
export const startFunding = (startFundingInfo) => api.post('/start-funding', startFundingInfo);
export const hireEmployee = (hireEmployeeInfo) => api.post('/hire-employee', hireEmployeeInfo);
export const fireEmployee = (fireEmployeeInfo) => api.post('/fire-employee', fireEmployeeInfo);
export const removeDriverRole = (removeDriverRoleInfo) => api.post('/remove-driver-role', removeDriverRoleInfo);
export const addWorkerRole = (addWorkerRoleInfo) => api.post('/add-worker-role', addWorkerRoleInfo);
export const addProduct = (addProductInfo) => api.post('/add-product', addProductInfo);
export const purchaseProduct = (purchaseProductInfo) => api.post('/purchase-product', purchaseProductInfo);
export const removeProduct = (removeProductInfo) => api.post('/remove-product', removeProductInfo);
export const addVan = (addVanInfo) => api.post('/add-van', addVanInfo);
export const takeoverVan = (takeoverVanInfo) => api.post('/takeover-van', takeoverVanInfo);
export const loadVan = (loadVanInfo) => api.post('/load-van', loadVanInfo);
export const refuelVan = (refuelVanInfo) =>
  api.post("/refuel-van", refuelVanInfo);
export const driveVan = (driveVanInfo) => api.post("/drive-van", driveVanInfo);
export const manageService = (manageServiceInfo) => api.post('/manage-service', manageServiceInfo);


//export const refuelVan = (refuelVanInfo) => api.post('/refuel-van', refuelVanInfo);
