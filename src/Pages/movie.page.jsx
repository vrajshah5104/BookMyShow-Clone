import React, { useEffect, useState } from 'react';
import movieLayoutHOC from '../Layout/movie.layout';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
    // Instead of writing 'req.params', we write 'useParams' which is an inbuilt method of ReactJs
    // The 'movie-id' passed in your url is auto-fetched and stored in this variable called 'id'
    const {id} = useParams()

    // Creating the states
    const [cast, setCast] = useState();
    const [similarMovies, setSimilarMovies] = useState();

    useEffect (() => {
        const requestCast = async() => {
            // '/credits' gets the cast and crew for the specific movie id, got this from the TMDB
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        };
        requestCast();
    // Passing 'id' here because we are using 'params', 'home.page' meh we didn't pass and that is fine
    // Je pan params pass karo, e badha aa array ma pass karwa pade 
    }, [id]);

    useEffect (() => {
        const requestSimilarMoveis  = async () => {
            const getSimilarMoveis = await axios.get(`/movie/${id}/similar`);
            // Changing '.cast' to '.results', we need to check the TMDB API and write what's given there
            setSimilarMovies(getSimilarMoveis.data.results);
        };
        requestSimilarMoveis();
    }, [id]);

    return (
        <>
            <div></div>
        </>
    )
}

// Passing 'moviePage' as a parameter
export default movieLayoutHOC(MoviePage);