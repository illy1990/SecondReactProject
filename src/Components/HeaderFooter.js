import React from 'react';
import "./ErsteWebseiteHeader.css"

const HeaderFooter = (props) => {
    return (
        <li className="AndereRichtung"><h2>{props.uppernumber}</h2><h1>{props.lowernumber}</h1></li>
    );
}

export default HeaderFooter;