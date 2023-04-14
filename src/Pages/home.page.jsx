import React, {useState} from 'react';

// Importing Layout HOC here
import defaultLayoutHOC from '../Layout/default.layout';

// Importing Components here
import EntertainmentCardComponent from '../Components/Entertainment/entertainmentCardComponent';
import HeroCarousel from '../Components/HeroCarousel/heroCarousel.component';
import PosterSlider from '../Components/PosterSlider/posterSlider.component';

const HomePage = () => {
    // Creating states here to store information with respect to particular components
    // Can pass a value but there are multiple values soo they will have array as a default value
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    return (
        <>
            <HeroCarousel />
            {/* Using Tailwind */}
            {/* This is a React application so 'className' unlike plain html which has 'class' */}
            <div className="container mx-auto px-4 md:px-12 my-8">
                <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">The Best of Entertainment</h1>
                <EntertainmentCardComponent />
            </div>
            <div className="container mx-auto px-4 md:px-12 my-8">
                <PosterSlider
                    // Passing props from homePage to here
                    title="Recommended Movies"
                    subject="List of recommended movies"
                    posters={recommendedMovies}
                    isDark={false}
                />
            </div>
            <div className="bg-premier-800 py-12">
                <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/2560px-RuPay.svg.png"
                             className='w-full h-full' alt="RuPay" />
                    </div>
                    <PosterSlider
                        title="Premiers"
                        subject="Brand new releases every friday"
                        posters={premierMovies}
                        isDark={true}
                    />
                </div>
            </div>
            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider 
                    title="Online Streaming Events"
                    subject="Online Stream Events"
                    posters={onlineStreamEvents}
                    isDark={false}
                />
            </div>
        </>
    );
};

// Passing 'homePage' as a parameter
export default defaultLayoutHOC(HomePage);