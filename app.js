const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, '/public')));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/view/index.html');
});

app.listen(3000, () => {
  console.log("서버 구동 중.. (http://localhost:3000)");
});