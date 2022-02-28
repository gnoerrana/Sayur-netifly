/*
 * @Author: Gilang
 * @Date:   2022-02-27 22:24:42
 * @Last Modified by:   Gilang
 * @Last Modified time: 2022-02-28 00:24:59
 */

import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardItem from "./CardItem/CardItem";
import Typography from "@mui/material/Typography";

const CardList = ({ ...props }) => {
	return (
		<Box sx={{ p: 8 }}>
			<Typography gutterBottom variant="h5" component="div">
				{props.title}
			</Typography>
			<Grid container spacing={2}>
				<CardItem {...props} />
			</Grid>
		</Box>
	);
};

export default CardList;