const express = require('express');
const app = express();
const bcrypt= require('bcrypt');
const cors = require('cors')
const bodyParser = require('body-parser');

const pool = require('../database');

const port = process.env.SEARCH_PORT || 4006; 

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.get('/api/getAllposts', (req, res) => {
  pool.query('SELECT * FROM posts', (err, results) => {
    if(err) {
      console.log(err);
      return res.send({
        valid: false,
        err: 'Could not fetch all posts.',
      });
    }
    console.log("Posts successfully fetched.");
    return res.send({
      valid: true,
      results: results
    });
  });
});

app.get('/api/searchByTerm', (req, res) => {
  pool.query("SELECT * FROM posts WHERE title like '%" + req.query.term + "%'", (err, results) => {
    if(err) {
      console.log(err);
      return res.send({
        valid: false,
        err: err
      });
    } 
    return res.send({
      valid: true,
      results: results
    });
  });
});

app.listen(port, console.log("Search service running."));