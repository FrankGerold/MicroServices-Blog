const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();
app.use(bodyParser.json());


app.post('/events', async (req, res) => {
  const event = req.body;

  await axios.post('http://localhost:3001/events', event);
  await axios.post('http://localhost:3002/events', event);
  await axios.post('http://localhost:3003/events', event);

  res.send({ status: 'OK'})
});

app.listen(3004, () => {
  console.log('Event bus listening on port 3004');
})
