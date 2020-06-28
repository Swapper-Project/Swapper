const express = require('express');
const app = express();
const bcrypt= require('bcrypt');
const cors = require('cors')
const bodyParser = require('body-parser');

const pool = require('./database');

const port = process.env.LOGIN_PORT || 4001; 
var salt = bcrypt.genSaltSync();

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.post('/api/login', (req, res) => { 
  console.log("Login hit.");
  pool.query('SELECT * FROM users WHERE email = ?', [req.body.email], (err, result) => {
    if(err) {
      console.log(err);
      return res.send({
        valid: false,
        err: 'That email doesn\'nt have an account associated with it.',
      });
    } else {
      bcrypt.compare(req.body.password, result[0].password, (err, result) => {
        if(result == true) {
          console.log("Successful Login.");
          res.send({
            valid: true,
          });
        } else {
          console.log("Invalid password.");
          return res.send({
            valid: false,
            err: 'Invalid password entered. Please try again.'
          });
        }
     });
    }
  });
});

app.post('/api/register', (req, res) => {
  console.log("Register hit.");
  pool.query('SELECT * FROM users WHERE email = ? OR username = ?', [req.body.email, req.body.username], function(err, result) {
    if(result.length != 0) {
      return res.send({
        valid: false,
        err: 'That username and/or email has already been used to create an account.'
      });
    }
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      pool.query('INSERT INTO users SET ?', {username: req.body.username, email : req.body.email, password: hash}, (err) => {	
        if(err) {
          return res.send({
            valid: false,
            err: 'Something went wrong when registering! Please try again.'
          });
        }
        console.log("Successful registration.");
        return res.send({valid: true});
      });		
    })
  });
});

app.listen(port, console.log("Authentication service running."));