import React from 'react';

const Cast = (props) => {
    return (
        <>
            <div className='flex flex-col items-center'>
                <div className='w-32 h-32'>
                    <img src={`https://images.tmdb.org/t/p/original${props.image}`}
                            alt="Cast and Crew"
                            className='w-full h-full rounded-full object-cover object-center'
                    />
                </div>
                <h1 className='text-xl text-gray-800'>{props.castName}</h1>
                <h5 className='text-sm text-gray-500'>{props.role}</h5>
            </div>
        </>
    )
}

export default Cast;