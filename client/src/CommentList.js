import React/*, { useState, useEffect }*/ from 'react';

// import axios from 'axios';

export default ({ comments }) => {
  // const [comments, setComments] = useState([]);
  //
  // const fetchData = async () => {
  //   const res = await axios.get(`http://localhost:3002/posts/${postId}/comments`);
  //
  //   setComments(res.data);
  // }
  //
  // useEffect(() => {
  //   fetchData();
  // }, [])

  const renderedComments = comments.map(comment => {
    let content;

    switch (comment.status) {
      case 'approved':
        content = comment.content;
        break;
      case 'pending':
        content = 'Comment awaiting moderation!'
        break;
      case 'rejected':
        content = 'Comment rejected for profane fruit reference.'
        break;
    }

    return <li key={comment.id}>
      {content}
    </li>;
  });

  return <ul>{renderedComments}</ul>;
}
