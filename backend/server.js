const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const ownersRoute = require("./route/ownersRoute");
const employeesRoute = require("./route/employeesRoute");
const driversRoute = require("./route/driversRoute");
const locationRoute = require("./route/locationRoute");
app.use("/api/owners", ownersRoute);
app.use("/api/employees", employeesRoute);
app.use("/api/drivers", driversRoute);
app.use("/api/locations", locationRoute);

// DO NOT MAKE ANY CHANGES HERE
const allRoutes = require("./route/allRoutes");
app.use("/api", allRoutes);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running`));
