import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';
import { Movies, Peoples } from "./Templates";

const CardItem = ({ ...props }) => {
	const CardSwitch = ({ ...type }) => {
		switch (type.type) {
			case "AllFilms":
				return <Movies data={props.data} />;
			case "AllPeople":
				return <Peoples data={props.data} />;
			default:
				return <Movies data={props.data} />;
		}
	};

	return <CardSwitch type={props.data} />;
};

export default CardItem;