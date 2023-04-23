import React, { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios';

// Importing Layout HOC here
import DefaultLayoutHOC from '../Layout/default.layout';
// Importing Components here
import EntertainmentCardSlider from '../Components/Entertainment/entertainmentCard.component';
import HeroCarousel from '../Components/HeroCarousel/heroCarousel.component';
import PosterSlider from '../Components/PosterSlider/posterSlider.component';

const HomePage = () => {
    // Creating states here to store information with respect to particular components
    // Can pass a value but there are multiple values soo they will have array as a default value
    // These are three APIs
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    useEffect (() => {
        const requestTopRatedMovies = async () => {
            // Using 'axios' to call the database
            const getTopRatedMovies = await axios.get(
                "/movie/top_rated"
            );
            setRecommendedMovies(getTopRatedMovies.data.results)
        }
        requestTopRatedMovies();
    // Default array [] if the function isn't called somehow
    }, []);

    useEffect (() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get (
                // URL ma 'top-rated' change thai ne bani gayu 'popular' 
                // All of this can be found from the TMDB
                '/movie/popular'
            );
            setPremierMovies(getPopularMovies.data.results)
        }
        requestPopularMovies();
    }, []);

    useEffect (() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get (
                // Ahiya 'popular' change thai gayu 'upcoming' mate
                '/movie/upcoming'
            );
            setOnlineStreamEvents(getUpcomingMovies.data.results)
        }
        requestUpcomingMovies();
    }, []);

    return (
        <>
            <HeroCarousel />
            {/* Using Tailwind */}
            {/* This is a React application so 'className' unlike plain html which has 'class' */}
            <div className="container mx-auto px-4 md:px-12 my-8">
                <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
                    The Best of Entertainment
                </h1>
                <EntertainmentCardSlider />
            </div>
            <div className="container mx-auto px-4 md:px-12 my-8">
                <PosterSlider
                    // Passing props from homePage to here
                    title="Recommended Movies"
                    subtitle="List of recommended movies"
                    posters={recommendedMovies}
                    isDark={false}
                />
            </div>
            <div className="bg-premier-800 py-12">
                <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                             className='w-full h-full' alt="RuPay" />
                    </div>
                    <PosterSlider
                        title="Premiers"
                        subtitle="Brand new releases every friday"
                        posters={premierMovies}
                        isDark={true}
                    />
                </div>
            </div>
            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider 
                    title="Online Streaming Events"
                    subtitle="Online Stream Events"
                    posters={onlineStreamEvents}
                    isDark={false}
                />
            </div>
        </>
    );
};

// Passing 'homePage' as a parameter
export default DefaultLayoutHOC(HomePage);