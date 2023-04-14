import React from 'react';
import MovieNavbar from '../Components/Navbar/movieNavbar.component';

const movieLayoutHOC = (Component) => ({...props}) => {
    return (
        <div>
            <MovieNavbar />
            <Component {...props}/>
            <div>Footer</div>
        </div>
    )
}

export default movieLayoutHOC;