import React from 'react';
import MovieNavbar from '../Components/Navbar/movieNavbar.component';

const MovieLayoutHOC = (Component) => ({...props}) => {
    return (
        <div>
            <MovieNavbar />
            <Component {...props}/>
            <div>Footer</div>
        </div>
    )
}

export default MovieLayoutHOC;