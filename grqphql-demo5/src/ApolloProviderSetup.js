import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
    uri:'https://test.api.shop.strackit.com/graphql',
    cache: new InMemoryCache()
})

const ApolloProviderSetup = ({children}) => {
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
};

export default ApolloProviderSetup