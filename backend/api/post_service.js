const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const cors = require('cors')
const bodyParser = require('body-parser');
const pool = require('../database');
const path = require('path');

const port = process.env.POST_PORT || 4002; 

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use(fileUpload());
app.use('/uploads', express.static(__dirname + '../uploads'));
app.use(express.static(__dirname + '/uploads'));

//Post function to make an upload item request to the database
app.post('/api/post', (req, res) => {
  if(req.files === null)
    return res.status(400).send({err: 'No image provided.'})

    const file = req.files.file;

    file.mv(`${__dirname}/../uploads/post_images/${file.name}`, (err) => {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
    }, (err) => {
      if(err) {
        return console.log(err);
      }
    });
    pool.query('INSERT INTO posts SET ?', {userId: req.body.userId, title: req.body.title, description: req.body.description,
    category: req.body.category, filename: `${file.name}`}, (err, insertedRecord) => {	
      if(err) {
        return res.send({
          valid: false,
          err: 'Something went wrong when posting your swap! Please try again.'
        });
      }

      console.log("Successful post.");

      return res.send({
        valid: true,
      });
    });		
});

app.get('/api/getAllposts', (req, res) => {
  pool.query('SELECT * FROM posts', (err, results) => {
    if(err) {
      console.log(err);
      return res.send({
        valid: false,
        err: 'Could not fetch all posts.',
      });
    }

    return res.send({
      valid: true,
      results: results
    });
  });
});

app.post('/api/getPosterInfo', (req, res) => {
  pool.query('SELECT * FROM users WHERE userId=?', [req.body.userId], function(err, result) {
    if(err) {
      console.log(err);
      return res.send({
        valid: false,
        err: 'That email doesn\'nt have an account associated with it.',
      });
    }
    if(result.length == 0) {
      console.log('Invalid userId passed to endpoint.');
      return res.send({
        valid: false,
        err: 'Invalid userId passed to endpoint.',
      });
    }
    res.send({
      valid: true,
      email: result[0].email,
      rating: result[0].rating,
    });
  });
});

app.listen(port, console.log("Post service running."));