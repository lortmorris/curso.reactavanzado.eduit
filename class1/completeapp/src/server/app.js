const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
const server = http.createServer(app);
const dataFile = './data.json';
let memory = {state:[]};
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/state', (req, res) => {
  res.json(memory);
});

app.put('/state', (req, res) => {
  memory.state = req.body;
  fs.writeFile(dataFile, JSON.stringify(memory), (err)=>{
      res.json(memory);
  });

});

fs.readFile(dataFile, (err, data)=> {
  
  try{
    memory = JSON.parse(data.toString());
  }catch(e){

  }
});
app.listen(8000);
