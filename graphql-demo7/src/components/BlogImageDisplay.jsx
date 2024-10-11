import React from 'react';
import { useQuery } from '@apollo/client';
import GET_BLOG_IMAGE from '../queries/getBlogImage';
import '../styles/BlogImageDisplay.css';

function BlogImageDisplay({ shopId }) {
  const { loading, error, data } = useQuery(GET_BLOG_IMAGE, {
    variables: { filter: { shopId } },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="blog-image-container">
      <img src={data.Blog[0]?.image} alt="Blog Image" />
    </div>
  );
}

export default BlogImageDisplay;
