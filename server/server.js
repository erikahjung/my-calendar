const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

app.use('/build', express.static(path.join(__dirname, '../build')));
app.get('/', (_, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'))
})

app.listen(PORT, () => {console.log(`Listening on PORT: ${PORT}...`)});
