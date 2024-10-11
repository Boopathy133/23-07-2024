import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import BlogImageDisplay from './components/BlogImageDisplay';

function App() {
  const shopId = 347; // Example shopId

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Blog Image Display</h1>
        <BlogImageDisplay shopId={shopId} />
      </div>
    </ApolloProvider>
  );
}

export default App;
