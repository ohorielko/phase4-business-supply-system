const express = require('express');
const router = express.Router();
const db = require('../db');

// display_driver_view
router.get('/view', (req, res) => {
    db.query('SELECT * FROM display_driver_view', (err, result) => {
        if (err) return res.status(400).json({error: err.message});
        res.status(200).json(result);
    });
});

// add_driver
router.post('/add', (req, res) => {
    const { username, licenseID, license_type, driver_experience } = req.body;

    db.query(`CALL add_driver_role(?, ?, ?, ?)`, 
        [username, licenseID, license_type, driver_experience], 
        (err, result) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({error: 'Failed to add a new driver'});
        }
        res.status(200).json({message: 'A new driver is added successfully'});
    });
});

module.exports = router;