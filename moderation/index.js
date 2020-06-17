const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();
app.use(bodyParser.json());


app.post('/events', (req, res) => {
  
});


app.listen(3005, () => {
  console.log('Moderation service listening on port 3005. Hol\' up.');
})
