const mysql = require('mysql');
const util = require('util');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
  connectionLimit: 25,
  host: 'localhost',
  port: `${process.env.DB_PORT}`,
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASS}`,
  database: 'swapper_dev',
});

pool.getConnection((err, conn) => {
  if(err) {
    console.log(err + " " + "ERR-CODE: " + err.code);
  }
  
  if(conn) {
    conn.release();
    console.log("DB connection sucessful.")
  }
});

pool.query = util.promisify(pool.query)
module.exports = pool;