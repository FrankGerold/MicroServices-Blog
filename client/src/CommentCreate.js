import React, { useState } from 'react';
import axios from 'axios'

export default ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (evt) => {
    evt.preventDefault();

    await axios.post(`http://192.168.64.2/posts/${postId}/comments`, {
      content
    });

    setContent('');
  }

  return <div>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>New Comment</label>
        <input className="form-control" value={content} onChange={e => setContent(e.target.value)} />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  </div>;
};
