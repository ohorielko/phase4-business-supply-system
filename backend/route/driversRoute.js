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

module.exports = router;