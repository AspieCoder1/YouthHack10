const express = require('express');
const path = require('path');

const app = express()

const publicPath = path.join(__dirname, '../public');

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(process.ENV.port || 3000);