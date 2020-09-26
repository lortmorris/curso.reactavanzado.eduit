const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.static('./src/public'));
const server = http.createServer(app);

app.get('*', (req, res, next) => {
  console.info('no se que es');
  res.sendFile(__dirname+'/src/public/index.html');
});


app.post('/todolists', (req, res) => {
  res.json({
    id: new Date().getTime(),
    title: req.body.title,
    added: new Date(),
    completed: false,
    todos: [],
  });
});

server.listen(5000, () => console.info('listen on *:5000'));
