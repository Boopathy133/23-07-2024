import React from 'react';
import { useParams } from 'react-router-dom';
import Post from './Post';

const BlogPost = () => {
  const { id } = useParams();
  return (
    <div>
      <Post id={id} />
    </div>
  );
};

export default BlogPost;
