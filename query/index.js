const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const axios = require('axios');


const app = express();
app.use(bodyparser.json());
app.use(cors());


const posts = {};

const handleEvent = (type, data) => {
  if (type === 'PostCreated') {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    post.comments.push({ id, content, status });
  };

  if (type === 'CommentUpdated') {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    const comment = post.comments.find(comment => comment.id === id);

    comment.status = status;
    comment.content = content;
  }
}

app.get('/posts', (req, res) => {
  res.send(posts);
});


app.post('/events', (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data)

  res.send({});
});


app.listen(3003, async () => {
  console.log('Query service listening on port 3003.');

  const events = await axios.get('http://localhost:3004/events');

  for (let event of events.data) {
    console.log('Processing event: ', event.type);

    handleEvent(event.type, event.data)
  };
});
