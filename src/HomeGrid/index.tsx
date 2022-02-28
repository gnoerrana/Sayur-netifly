import React from "react";
import Container from '@mui/material/Container';
import CardList from '../components/CardList';


const HomeGrid = () => {
	return (
		<Container fixed>
            <CardList data="AllFilms" title="Movies"/>
            <CardList data="AllPeople" title="Character"/>
        </Container>
		);
};

export default HomeGrid;