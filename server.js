const express = require('express');
const app = express();

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
	res.sendfile(__dirname + '/index.html');
})

app.listen(3000, () => {
	console.log('Server is running! localhost:' + 3000);
})