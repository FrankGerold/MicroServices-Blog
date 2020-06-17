import React from 'react';

import PostCreate from './PostCreate'
import PostList from './PostList'

export default () => {
  return <div className="container">
    <h1>Blogging With Microservices</h1>
    <PostCreate />
    <PostList />
  </div>;
}
