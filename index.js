const express = require('express');
require('dotenv').config();

const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server, { cors: { origin: '*' } });

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('home');
});

PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
	console.log(`Up ${PORT} ...`);
});

io.on('connection', (socket) => {
	console.log('__User ID__' + socket.id);

	socket.on('message', (data) => {
		socket.broadcast.emit('message', data);
	});
});
