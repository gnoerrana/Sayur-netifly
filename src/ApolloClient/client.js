/*
* @Author: Gilang
* @Date:   2022-02-27 22:21:16
* @Last Modified by:   Gilang
* @Last Modified time: 2022-02-27 23:15:19
*/

import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { RestLink } from "apollo-link-rest";

const httpLink = new HttpLink({
  uri: "https://swapi-graphql.netlify.app",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = 'Oj2E__ZFvldEaSuyFoUoLXQWy2qUrgoH7OhfG2HsI8k';
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});