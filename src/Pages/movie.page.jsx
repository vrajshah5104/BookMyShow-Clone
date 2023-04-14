import React from 'react';
import movieLayoutHOC from '../Layout/movie.layout';

const MoviePage = () => {
    return (
        <div>Movie Page</div>
    )
}

// Passing 'moviePage' as a parameter
export default movieLayoutHOC(MoviePage);