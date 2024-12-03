const express = require('express');
const router = express.Router();
const db = require('../db');

// display_employee_view
router.get('/view', (req, res) => {
    db.query('SELECT * FROM display_employee_view', (err, result) => {
        if (err) return res.status(400).json({error: err.message});
        res.status(200).json(result);
    });
});

// add_employee
router.post('/add', (req, res) => {
    const { username, first_name, last_name, address, birthdate, taxID, hired, employee_experience, salary } = req.body;

    db.query(`CALL add_employee(?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        [username, first_name, last_name, address, birthdate, taxID, hired, employee_experience, salary], 
        (err, result) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({error: 'Failed to add a new employee'});
        }
        res.status(200).json({message: 'A new employee is added successfully'});
    });
});

module.exports = router;