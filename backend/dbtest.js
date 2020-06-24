const express = require('express');
const app = express();

const pool = require('./database');

app.get('/test', (req, res) => {
	let query ="SELECT * FROM users";

	pool.query(query, (err, result) => {
		if(err) throw err;
		res.send(result);
	});   
});

app.listen(process.env.PORT, () => {
	console.log(`Listening on port ${process.env.PORT}.`);
});