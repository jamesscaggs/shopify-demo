import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import "./assets/main.css";

const httpLink = createHttpLink({ uri: process.env.REACT_APP_SHOPIFY_URI });

const middlewareLink = setContext(() => ({
  headers: {
    "X-Shopify-Storefront-Access-Token": process.env.REACT_APP_SHOPIFY_TOKEN,
  },
}));

const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache(),
});

console.log({ client });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    <h1>hello</h1>
  </ApolloProvider>,
  document.getElementById("root")
);
