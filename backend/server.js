const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const ownersRoute = require('./route/ownersRoute');
const employeesRoute = require('./route/employeesRoute');
const driversRoute = require('./route/driversRoute');

app.use('/api/owners', ownersRoute);
app.use('/api/employees', employeesRoute);
app.use('/api/drivers', driversRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running`));
