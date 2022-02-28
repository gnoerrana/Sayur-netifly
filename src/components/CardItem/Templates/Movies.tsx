import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const fetchData = (fetchData: any) => {
	return gql`
		query AllFilms {
			allFilms {
				films {
					title
					episodeID
					releaseDate
					openingCrawl
					director
					producers
					id
				}
			}
		}
	`;
};

const Movies = ({ ...props }) => {
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
			{data.allFilms.films.map((res: any) => (
				<Grid item xs={4} key={res.episodeID}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<Link
								to={{
									pathname: `/page-detail/${props.data}/${res.id}`,
								}}
							>
								<CardMedia
									component="img"
									height="200"
									image="https://via.placeholder.com/200"
									alt={res.title}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
									>
										{res.title}
									</Typography>
									<Typography variant="subtitle1">
										Released : {res.releaseDate}
									</Typography>
									<Typography variant="subtitle1">
										Director : {res.director}
									</Typography>
									
								</CardContent>
							</Link>
						</CardActionArea>
					</Card>
				</Grid>
			))}
		</>
	);
};

export default Movies;