const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const token = '7learn';
app.post('/login', (req, res) => {
	const {username, password} = req.body.data;
	if ((username === 'admin', password === 'admin')) {
		res.send({
			success: true,
			message: 'you successfully loged in',
			token,
			user: {
				name: 'omid',
				id: '1',
				mobile: '+9893737398553',
			},
		});
	} else {
		res.send({
			success: false,
			message: 'invalid user or password',
		});
	}
});

app.get('/chat', (req, res) => {
	console.log(req.headers.authorization);
	const {authorization} = req.headers;

	if (token === authorization) {
		res.send({
			success: true,
			token,
			user: {
				name: 'omid',
				id: '1',
				mobile: '+9893737398553',
			},
		});
	} else {
		res.send({
			success: false,
			message: 'you are not allowed to access this page',
		});
	}
});

app.listen(4000, () => {
	console.log(`app is running on port 4000`);
});
