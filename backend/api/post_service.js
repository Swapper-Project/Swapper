const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const bcrypt= require('bcrypt');
const cors = require('cors')
const bodyParser = require('body-parser');
const pool = require('../database');

const port = process.env.POST_PORT || 4002; 

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use(fileUpload());
app.use('/uploads', express.static(__dirname + '../uploads'));

//Post function to make an upload item request to the database
app.post('/api/post', (req, res) => {
  if(req.files === null)
    return res.status(400).send({err: 'No image provided.'})

    const file = req.files.file;

    console.log(req.body);

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

app.listen(port, console.log("Post service running."));