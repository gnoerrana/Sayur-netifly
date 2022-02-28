/*
* @Author: Gilang
* @Date:   2022-02-27 22:21:16
* @Last Modified by:   Gilang
* @Last Modified time: 2022-02-28 00:27:47
*/

import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { RestLink } from "apollo-link-rest";

const httpLink = new HttpLink({
  uri: "/api/*",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});