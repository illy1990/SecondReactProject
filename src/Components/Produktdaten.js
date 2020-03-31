import React from 'react';

const Productdaten = (props) => {
    return (
        <div>
            <figure>
                <img src={props.link} alt=""></img>
                <figcaption>
                    <h1>{props.name}</h1>
                    <p>Preis: {props.price}€</p>
                </figcaption>
            </figure>

        </div>

    );
}

export default Productdaten;
