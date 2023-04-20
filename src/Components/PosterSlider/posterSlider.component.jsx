import React from 'react';

import Slider from 'react-slick';
import Poster from '../Poster/poster.component';

const PosterSlider = (props) => {
    // Adding 'config' for the configuration file of this component, used in 'movie.page.jsx'
    const { title, subtitle, posters, isDark, config } = props;

    const settings = {
        // All of this is present in the react-slick website
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='flex flex-col items-start sm:ml-3 my-2'>
                {/* If the background is dark, the colour should be white otherwise black condition */}
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                    {title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-white' : "text-gray-800"}`}>
                    {subtitle}
                </p>
            </div>
            {config && (
                <Slider {...config}>
                    {posters.map((each, index) => (
                        <Poster {...each} isDark={isDark} key={index} />
                    ))}
                </Slider>
            )}
            {!config && (
                <Slider {...settings}>
                    {posters.map((each, index) => (
                        <Poster {...each} isDark={isDark} key={index} />
                    ))}
                </Slider>
            )}
        </>
    );
};

export default PosterSlider;