import React from "react";
import { useQuery, gql } from "@apollo/client";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const fetchData = (fetchData: any) => {
	return gql`
		query AllPeople {
			allPeople(first: 6) {
				people {
					name
					birthYear
					eyeColor
					gender
					hairColor
					height
					mass
					skinColor
					homeworld {
						id
					}
				}
			}
		}
	`;
};

const Peoples = ({ ...props }) => {
	const { data, loading, error } = useQuery(fetchData(props.data));

	if (loading) {
		return (
			<Box sx={{ p: 8, display: "flex" }}>
				<CircularProgress />
			</Box>
		);
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<>
			{data.allPeople.people.map((res: any) => (
				<Grid item xs={4} key={Math.random()}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
								>
									{res.name}
								</Typography>
								<Typography variant="subtitle1">
									Eye Color : {res.eyeColor}
								</Typography>
								<Typography variant="subtitle1">
									Gender : {res.gender}
								</Typography>
								<Typography variant="subtitle1">
									Birth Year : {res.birthYear}
								</Typography>
								<Typography variant="subtitle1">
									Height : {res.height}
								</Typography>
								<Typography variant="subtitle1">
									Skin Color : {res.skinColor}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			))}
		</>
	);
};

export default Peoples;