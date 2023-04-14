import React from 'react';
import Navbar from '../Components/Navbar/navbar.component';

const defaultLayoutHOC = (Component) => ({...props}) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        <div>Footer</div>
      </div>
    )
}

export default defaultLayoutHOC;