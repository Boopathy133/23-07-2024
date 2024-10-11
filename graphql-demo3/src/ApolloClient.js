import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri:'https://test.api.shop.strackit.com/graphql',
    cache: new InMemoryCache(),
});

export default client;