/*
* @Author: Gilang
* @Date:   2022-02-27 22:24:42
* @Last Modified by:   Gilang
* @Last Modified time: 2022-02-27 22:26:37
*/

import React from "react";
import { useQuery, gql } from "@apollo/client";

const filmList = gql`
  query AllFilms {
	  allFilms {
	    films {
	      title
	    }
	  }
	}
`;

function FilmList() {
  const { data, loading, error } = useQuery(filmList);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

export default FilmList;