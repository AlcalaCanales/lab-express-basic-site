//Require express
const express = require('express');

//save the function express in app
const app = express();

//expose the content of the folder public
app.use(express.static('public'));

//path for home
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

//path for about
app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

//path for works

app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
});

//path for photo gallery

app.get('/photogallery', (request, response) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

// path for random
app.get('*', function (request, response) {
  response.sendFile(__dirname + '/views/home.html');
});

app.listen(3000);
