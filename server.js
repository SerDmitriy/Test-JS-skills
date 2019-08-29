const server = require('http');
const express = require('express');

const app = express();

server.createServer(app).listen(8001, () => { console.log('PORT: 8000') })

app.get('/', (req, res) => {
  console.log('!!!!!!')
  res.sendFile(__dirname + '/index.html' )
})

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html')
})