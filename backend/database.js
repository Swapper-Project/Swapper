const express = require('express');
const app = express();

const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createConnection({
    host: 'localhost',
    user: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASS}`,
    database: 'swapper_dev',
});

db.connect((err) => {
    if(err) {
        console.log(err);
    }
    console.log("Successfully connected to Database.")
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});