import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MovieLayoutHOC from '../Layout/movie.layout';
import axios from 'axios';
import { MovieContext } from '../Context/movie.context';
import Slider from 'react-slick';
import { FaCcVisa, FaCcApplePay } from 'react-icons/fa';
import PosterSlider from '../Components/PosterSlider/posterSlider.component';
import MovieHero from '../Components/MovieHero/movieHero.component';
import Cast from '../Components/Cast/cast.component';

const MoviePage = () => {
    // Instead of writing 'req.params', we write 'useParams' which is an inbuilt method of ReactJs
    // The 'movie-id' passed in your url is auto-fetched and stored in this variable called 'id'
    const { id } = useParams();

    // Already created in 'movie.context.jsx' as a state, soo we only want the movie information
    const { movie, setMovie } = useContext(MovieContext);

    // Creating the states
    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    useEffect (() => {
        const requestCast = async() => {
            // '/credits' gets the cast and crew for the specific movie id, got this from the TMDB
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        };
        requestCast();
    // Passing 'id' here because we are using 'params', 'home.page' meh we didn't pass and that is fine
    // Je pan params pass karo, e badha aa array ma pass karwa pade 
    }, [id]);

    useEffect (() => {
        const requestSimilarMovies  = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
            // Changing '.cast' to '.results', we need to check the TMDB API and write what's given there
            setSimilarMovies(getSimilarMovies.data.results);
        };
        requestSimilarMovies();
    }, [id]);

    useEffect (() => {
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
            setRecommendedMovies(getRecommendedMovies.data.results);
        };
        requestRecommendedMovies();
    }, [id]);

    useEffect (() => {
        const requestMovie = async () => {
            const getMovieDate = await axios.get(`/movie/${id}`);
            setMovie(getMovieDate.data);
        };
        requestMovie();
    }, [id]);

    const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initailSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              initailSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initailSlide: 4,
            },
          },
        ],
    };    

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initailSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initailSlide: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initailSlide: 2,
            },
          },
        ],
    };

    return (
        <>
            <MovieHero />
            {/* lg-ml-20 means on large screen size, margin all the left is 20 */}
            <div className='my-12 px-4 container lg-ml-20 lg:w-2/1'>
                <div className='flex flex-col items-start gap-3'>
                    <h1 className='text-gray-800 font-bold gap-3 text-2xl'>About the Movie</h1>
                    <p>{movie.overview}</p>
                </div>

                <div className='my-8'>
                    <hr />
                </div>

                <div className='my-8'>
                    {/* text-2xl matlab text double the size, mb-3 matlab margin along the bottom is 3 */}
                    <h2 className='text-gray-800 font-bold text-2xl mb-3'>Applicable Offers</h2>
                    <div className='flex flex-col gap-3 lg:flex-row'>
                        <div className='flex items-start gap-2 bg-yellow-100 border-yellow-400 p-3 border-dashed border-2 rounded-md'>
                            <div className='w-8 h-8'>
                                <FaCcVisa className='w-full h-full' />
                            </div>
                            {/* 'flex-col' cuz we want it side by side */}
                            <div className='flex flex-col items-start'>
                                <h3 className='text-gray-700 text-xl font-bold'>Visa Stream Offer</h3>
                                <p className='text-gray-600'>
                                    Get 75% OFF upto on INR 300 on all RuPay Cards for BookMyShow Stream*
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start gap-2 bg-yellow-100 border-yellow-400 p-3 border-dashed border-2 rounded-md'>
                            <div className='w-8 h-8'>
                                <FaCcApplePay className="w-full h-full" />
                            </div>
                            <div className='flex flex-col items-start'>
                                <h3 className='text-gray-700 text-xl font-bold'>Movie Pass</h3>
                                <p className='text-gray-600'>
                                    Get 60% OFF upto on INR 250 on Apple Pay for BookMyShow Movie Pass*
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-8'>
                    <hr />
                </div>

                {/* Recommended Movies Slider */}
                <div className='my-8'>
                    <PosterSlider config={settings}
                                    title="Recommended Movies"
                                    posters={recommendedMovies}
                                    isDark={false}
                    />
                </div>

                <div className='my-8'>
                    <hr />
                </div>

                {/* Cast Slider */}
                <div className='my-8'>
                    <h2 className='text-gray-800 font-bold text-2xl mb-4'>
                        Cast and Crew
                    </h2>
                    <Slider {...settingsCast}>
                        {cast.map((castData) => (
                            <Cast image={castData.profile_path}
                                    castName={castData.original_name}
                                    role={castData.character}
                            />
                        ))};
                    </Slider>
                </div>

                <div className='my-8'>
                    <hr />
                </div>

                <PosterSlider
                    config={settings}
                    title="BMS Exclusive Movies"
                    posters={recommendedMovies}
                    isDark={false}
                />
            </div>
        </>
    )
}

// Passing 'moviePage' as a parameter
export default MovieLayoutHOC(MoviePage);