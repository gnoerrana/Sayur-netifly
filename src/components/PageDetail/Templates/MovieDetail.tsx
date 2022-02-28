import React from "react";
import { useQuery, gql } from "@apollo/client";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "left",
	color: theme.palette.text.secondary,
}));

const CrawlWrapper = styled(Paper)(({ theme }) => ({
	position: "relative",
	"& > .fade": {
		position: "absolute",
		width: "100%",
		height: "60%",
		top: 0,
		backgroundImage: "linear-gradient(0deg, transparent, #494949 75%)",
		zIndex: "1",
	},
	"& > .crawl-inner": {
		backgroundColor: "#494949",
		overflow: "hidden",
		display: "flex",
		justifyContent: "center",
		position: "relative",
		height: "300px",
		color: "#FFF",
		fontSize: "400%",
		fontWeight: "600",
		letterSpacing: "6px",
		lineHeight: "90%",
		perspective: "300px",
		textAlign: "center",
		"& > .crawl": {
			position: "relative",
			top: "99999px",
			transformOrigin: "50% 100%",
			animation: "crawl 60s linear",
			"& > .title": {
				fontSize: "90%",
				textAlign: "center",
			},
			"& > .title h1": {
				margin: "0 0 100px",
				textTransform: "uppercase",
				lineHeight: "90%",
			},
		},
	},

	"@keyframes crawl": {
		"0%": {
			top: "0",
			transform: "rotateX(20deg)  translateZ(0)",
		},
		"100%": {
			top: "-3000px",
			transform: "rotateX(25deg) translateZ(-1500px)",
		},
	},
}));

const fetchData = (props: any) => {
	return gql`
		query getFilmByID {
		  film(id:"${props.id}") {
		    title
			episodeID
			releaseDate
			openingCrawl
			director
			producers
			id
		  }
		}
	`;
};

const MovieDetail = ({ ...props }) => {
	const { data, loading, error } = useQuery(fetchData(props));
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
		<Box sx={{ p: 8, display: "flex" }}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Item>
						<Typography gutterBottom variant="h3" component="div">
							Episode {data.film.episodeID} : {data.film.title}
						</Typography>
						<Typography gutterBottom variant="h6" component="div">
							Released Date: {data.film.releaseDate}
						</Typography>
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>
						<Typography gutterBottom variant="h6" component="div">
							Movie Info :
						</Typography>
						<Typography gutterBottom variant="subtitle1" component="p">
							Director: {data.film.director}
						</Typography>
						<Typography gutterBottom variant="subtitle1" component="p">
							Producer: {data.film.producer}
						</Typography>
					</Item>
				</Grid>
				<Grid item xs={8}>
					<Item>
						<CrawlWrapper>
							<div className="fade"></div>
							<div className="crawl-inner">
								<div className="crawl">
									<div className="title">
										<p>Episode {data.film.episodeID}</p>
										<h1>{data.film.title}</h1>
									</div>
									<p>{data.film.openingCrawl}</p>
								</div>
							</div>
						</CrawlWrapper>
					</Item>
				</Grid>
				
			</Grid>
		</Box>
	);
};

export default MovieDetail;