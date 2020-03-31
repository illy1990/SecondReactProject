import React from 'react';
import Produktdaten from "./Produktdaten"
import "./Aufgabe2.css"

const Aufgabe2 = () => {
    return (
        <section className="flexibel">
            <Produktdaten link='https://th.bing.com/th/id/OIP.5doBjBrmI6KSkMEiHhBzHQHaFj?w=260&h=185&c=7&o=5&pid=1.7' name="Samsung 10 Plus" price="699.99" />
            <Produktdaten link='https://th.bing.com/th/id/OIP.sNnN1Gtb1UjRRpOk9h8WbwHaHa?w=170&h=170&c=7&o=5&pid=1.7' name="Samsung Note Plus" price="999.99" />
            <Produktdaten link='https://th.bing.com/th/id/OIP.IpAB8Q2Rwi1Bfv7CjXfROQHaFb?w=275&h=193&c=7&o=5&pid=1.7' name="Samsung Galaxy S7" price="875.00" />
        </section>

    );
}

export default Aufgabe2;