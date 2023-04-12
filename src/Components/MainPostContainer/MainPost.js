import React from 'react';
import Post from '../PostContainer/Post';
import ContentPost from '../ContentPostContainer/ContentPost';
import './mainPost.css';

export default function MainPost() {
  return (
    <div className="mainPostContainer">
      <ContentPost />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
