import React from 'react';

export const NextArrow = (props) => {
    return (
        <>
            {/* These props are passed from the 'heroCarousel.components' */}
            {/* In React 'style' always has double curly braces */}
            <div className={props.className} style={{color: "red", padding: "10px"}} onClick={props.onClick}></div>
        </>
    )
}

export const PrevArrow = (props) => {
    return (
        <>
            <div className={props.className} style={{...props.style}} onClick={props.onClick}></div>
        </>
    )
}