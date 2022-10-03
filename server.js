const express = require('express');
const path = require('path');
fileuplaod = require('express-fileupload');

let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));
app.use(fleupload());

app.get('/', (req, res) => {
  res.sendFile(path.join(inital_path, "home.html"));
})

app.get('/editor', (req, res) => {
  res.sendFile(path.join(initial_path, "editor.html"));
  
})