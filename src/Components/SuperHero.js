import React from 'react';


// reusable Components

const SuperHero = (props) => {
    console.log(props)
    console.log(props.urlImage)
    return (
        <article>
            <img src={props.urlImage} alt="" />
            <p>{props.id}</p>
            <h2>{props.name}</h2>
            <h2>{props.email}</h2>
        </article>
        // <SuperHero urlImage="" id="" name="" email=""
    );
}

export default SuperHero;