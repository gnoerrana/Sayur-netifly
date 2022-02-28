/*
* @Author: Gilang
* @Date:   2022-02-27 22:21:16
* @Last Modified by:   Gilang
* @Last Modified time: 2022-02-28 00:27:47
*/

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { MovieDetail } from "./Templates";

const DetailPage = () => {
	let { id } = useParams();
	let { path } = useParams();

	const PageSwitch = () => {
		switch (path) {
			case "AllFilms":
				return <MovieDetail id={id} />;
			default:
				return <MovieDetail id={id} />;
		}
	};

	return <PageSwitch />;
};

export default DetailPage;