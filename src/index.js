import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

import App from "./containers/App";

import "./index.scss";

const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://api.hashnode.com/",
        headers: {
            authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            "content-type": "application/json",
        },
    }),
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
