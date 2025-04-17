const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();

const options = {
      key: fs.readFileSync('/etc/letsencrypt/live/appmaster.co.kr/privkey.pem'),    cert: fs.readFileSync('/etc/letsencrypt/live/appmaster.co.kr/fullchain.pem')
}

https.createServer(options, app).listen(443, () => {
	 console.log('https Server running on port 443');
});

app.get('/', (req, res) => {
	res.send('Hello, Nail!  ');
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
