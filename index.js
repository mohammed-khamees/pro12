const express = require('express');

const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server, { cors: { origin: '*' } });

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('home');
});

server.listen(4000, () => {
	console.log('Up 4000 ...');
});

io.on('connection', (socket) => {
	console.log('__User ID__' + socket.id);

	socket.on('message', (data) => {
		socket.broadcast.emit('message', data);
	});
});
