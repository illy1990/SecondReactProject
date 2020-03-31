import React from 'react';

const MainBildGallery = (props) => {
    return (
        <figure>
            <img class="Essensbilder" src={props.bildlink} />
            <figcaption>
                <h1 id="Main2H1" class="blue">{props.unterschrift}</h1>
                <h2 id="Main2H2" class="grey blackSchrift">{props.text}</h2>
                <p id="Main2P" class="green"><span>{props.price1}</span>/<span>{props.price2}</span></p>
            </figcaption>
        </figure>
    );
}

export default MainBildGallery;

