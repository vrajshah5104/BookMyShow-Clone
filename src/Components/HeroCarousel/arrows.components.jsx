import React from 'react';

export function NextArrow(props) {
    return (
        <>
            {/* These props are passed from the 'heroCarousel.components' */}
            {/* In React 'style' always has double curly braces */}
            <div className={props.className} style={{color: "red", padding: "10px"}} onClick={props.onClick}></div>
        </>
    )
}

export function PrevArrow(props) {
    return (
        <>
            <div className={props.className} style={{...props.style}} onClick={props.onClick}></div>
        </>
    )
}