import React from 'react';
import "../Components/Aufgabe1_Verweis.css"

const Aufgabe1_Verweis = (props) => {
    return (
        <section className="Mittiger">
            <h1>{props.name}</h1>
            <h1>{props.description}</h1>
            <ul>
                <li>{props.pr1}</li>
                <li>{props.pr2}</li>
                <li>{props.pr3}</li>
            </ul>
        </section>
    );
}

export default Aufgabe1_Verweis;