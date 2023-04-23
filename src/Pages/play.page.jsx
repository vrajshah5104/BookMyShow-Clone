import React from 'react';
import DefaultLayoutHOC from '../Layout/default.layout';

import Poster from '../Components/Poster/poster.component';
import PlayFilters from '../Components/PlayFilter/playFilter.component';

const PlayPage = () => {
    return (
        <div className='container px-4 mx-auto my-10'>
            <div className='w-full flex flex-col-reverse lg:flex-row-reverse gap-4'>
                <h2 className='text-2xl font-bold mb-4'>Plays in Bhubaneswar</h2>
                <div className='flex flex-wrap'>
                    <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                        <Poster isPlay={true}
                                src=""
                                title="So Rude of Me by Sweets" 
                                subtitle="Comedy Shows | English, Hindi | 18+ | 2hr 30mins" />
                    </div>
                    <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                        <Poster isPlay={true}
                                src=""
                                title="So Rude of Me by Sweets" 
                                subtitle="Comedy Shows | English, Hindi | 18+ | 2hr 30mins" />
                    </div>
                    <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                        <Poster isPlay={true}
                                src=""
                                title="So Rude of Me by Sweets" 
                                subtitle="Comedy Shows | English, Hindi | 18+ | 2hr 30mins" />
                    </div>
                    <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                        <Poster isPlay={true}
                                src=""
                                title="So Rude of Me by Sweets" 
                                subtitle="Comedy Shows | English, Hindi | 18+ | 2hr 30mins" />
                    </div>
                    <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                        <Poster isPlay={true}
                                src=""
                                title="So Rude of Me by Sweets" 
                                subtitle="Comedy Shows | English, Hindi | 18+ | 2hr 30mins" />
                    </div>
                    <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                        <Poster isPlay={true}
                                src=""
                                title="So Rude of Me by Sweets" 
                                subtitle="Comedy Shows | English, Hindi | 18+ | 2hr 30mins" />
                    </div>
                </div>
            </div>
            <div className='lg:w-1/4 p-4 bg-white rounded'>
                <h2 className='text-2xl font-bold mb-4'>Filters</h2>
                <div>
                    <PlayFilters title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                </div>
                <div>
                    <PlayFilters title="Languages" tags={["English", "Hindi", "Gujarati"]} />
                </div>
            </div>
        </div>
    )
}

// Passing 'playPage' as a parameter
export default DefaultLayoutHOC(PlayPage);