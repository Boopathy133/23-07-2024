import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React, { Children } from 'react'

const ApolloProviderSetup = () => {
    const client = new ApolloClient({
        uri: 'https://test.api.shop.strackit.com/graphql',
        cache: new InMemoryCache()
    });

    const ApolloProviderSetup = ({ Children }) =(
        <ApolloProvider client={client}>
            {Children}
        </ApolloProvider>
    );
}

export default ApolloProviderSetup