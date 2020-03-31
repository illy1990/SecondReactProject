import React from 'react';
import picture from "../Bild3.jpg"
import "./sectionTwoColumns.css"

const SectionTwoColumn = () => {
    return (
        <section className="two">
            <div>
                <h1>Lorem10</h1>
                <p>Lorem100</p>
                <button>Click</button>
            </div>
            <div>
                <img src={picture} alt="" />
            </div>
        </section>

    );
}

export default SectionTwoColumn;