import React from "react";
import "./App.css";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from '@apollo/client';
import FilmList from './components/filmList';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <FilmList />
      </div>
    </ApolloProvider>
  );
}

export default App;
