const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();
app.use(bodyParser.json());

const events = [];


app.post('/events', async (req, res) => {
  const event = req.body;

  events.push(event);

  await axios.post('http://localhost:3001/events', event);
  await axios.post('http://localhost:3002/events', event);
  await axios.post('http://localhost:3003/events', event);
  await axios.post('http://localhost:3005/events', event);

  res.send({ status: 'OK'});
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(3004, () => {
  console.log('Event bus listening on port 3004');
})
