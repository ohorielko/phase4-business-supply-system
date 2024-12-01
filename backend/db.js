const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YOUR PASSWORD HERE',
    database: 'business_supply',
});

db.connect(error => {
    if (error) throw error;
    console.log('Connection with MySQL database is successful!')
});

module.exports = db;