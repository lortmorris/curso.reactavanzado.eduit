const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('./src/public'));
const server = http.createServer(app);

app.get('*', (req, res, next) => {
  console.info('no se que es');
  res.sendFile(__dirname+'/src/public/index.html');
});

server.listen(5000, () => console.info('listen on *:5000'));
