import React from 'react';
import "./IconBundle.css"

const IconBundle = (props) => {
    return (
        <section>
            <div>
                <h1><img src={props.logo} />{props.headline}</h1>
                <p>{props.text}</p>
            </div>
        </section>
    );
}

export default IconBundle;