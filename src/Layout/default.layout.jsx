import React from 'react';
import Navbar from '../Components/Navbar/navbar.component';

const DefaultLayoutHOC = (Component) => ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        <hr />
        <div>Footer</div>
      </div>
    )
}

export default DefaultLayoutHOC;