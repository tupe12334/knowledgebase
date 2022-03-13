import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

type Props = { children: any };

export default function Apollo({ children }: Props) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
