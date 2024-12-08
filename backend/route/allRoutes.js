const express = require('express');
const router = express.Router();
const db = require('../db');

// [10] start_funding
router.post('/start-funding', (req, res) => {
    const { owner, amount, long_name, fund_date } = req.body;

    db.query(`CALL start_funding(?, ?, ?, ?)`, 
        [owner, amount, long_name, fund_date], 
        (err, result) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({error: 'Failed start funding'});
        }
        res.status(200).json({message: 'Start funding was successfully completed!'});
    });
});

// [11] hire_employee
router.post('/hire-employee', (req, res) => {
    const { username, user_id } = req.body;

    db.query(`CALL hire_employee(?, ?)`, 
        [username, user_id], 
        (err, result) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({error: 'Failed to hire employee'});
        }
        res.status(200).json({message: 'Employee hired successfully!'});
    });
});

// [12] fire_employee
router.post('/fire-employee', (req, res) => {
    const { username, user_id } = req.body;

    db.query(`CALL fire_employee(?, ?)`, 
        [username, user_id], 
        (err, result) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({error: 'Failed to fire employee'});
        }
        res.status(200).json({message: 'Employee fired successfully!'});
    });
});

// [21] remove_driver_role
router.post('/remove-driver-role', (req, res) => {
    const { username } = req.body;

    db.query(`CALL remove_driver_role(?)`, 
        [username], 
        (err, result) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({error: 'Failed to remover driver role'});
        }
        res.status(200).json({message: 'Driver role removed successfully!'});
    });
});

// [4] add_worker_role
router.post('/add-worker-role', (req, res) => {
    const { username } = req.body;

    db.query(`CALL add_worker_role(?)`, 
        [username],
        (err, result) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({error: 'Failed to add worker role!'});
        }
        res.status(200).json({message: 'Worker role added successfully!'});
    });
});

// [5] add_product()
router.post('/add-product', (req, res) => {
    const { barcode, iname, weight } = req.body;

    db.query(`CALL add_product(?, ?, ?)`, 
        [barcode, iname, weight],
        (err, result) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({error: 'Failed to add product!'});
        }
        res.status(200).json({message: 'Product added successfully!'});
    });
});

// [18] purchase_product()
router.post('/purchase-product', (req, res) => {
    const { long_name, id, tag, barcode, quantity } = req.body;

    db.query(`CALL purchase_product(?, ?, ?, ?, ?)`, 
        [long_name, id, tag, barcode, quantity],
        (err, result) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({error: 'Failed to purchase product!'});
        }
        res.status(200).json({message: 'Product purchased successfully!'});
    });
});

// [19] remove_product()
router.post('/remove-product', (req, res) => {
    const { barcode } = req.body;

    db.query(`CALL remove_product(?)`, 
        [barcode],
        (err, result) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({error: 'Failed to remove product!'});
        }
        res.status(200).json({message: 'Product removed successfully!'});
    });
});
module.exports = router;