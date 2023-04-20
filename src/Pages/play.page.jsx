import React from 'react';
import DefaultLayoutHOC from '../Layout/default.layout';

const PlayPage = () => {
    return (
        <div>Play Page</div>
    )
}

// Passing 'playPage' as a parameter
export default DefaultLayoutHOC(PlayPage);