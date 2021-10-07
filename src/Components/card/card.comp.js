import React from "react";

import './card.comp.styles.css'

export const Card = (props) => (
    <div className="card-comp">
    <h1>{props.film.Title}
    <img alt='movie' src={props.film.Poster}></img>
            <h2>Year: {props.film.Year} </h2>
            <h3>Genre: {props.film.Genre} </h3> 
        </h1>
    
    </div>
    )