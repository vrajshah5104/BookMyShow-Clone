import React from 'react';
import defaultLayoutHOC from '../Layout/default.layout';

const PlayPage = () => {
    return (
        <div>Play Page</div>
    )
}

// Passing 'playPage' as a parameter
export default defaultLayoutHOC(PlayPage);