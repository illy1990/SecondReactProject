import React from 'react';
import HeaderFooter from "./HeaderFooter"
import "./ErsteWebseiteHeader.css"

const ErsteWebseiteHeader = () => {
    return (
        <div className="Background">
            <h1>HELLO THERE</h1>
            <h2>We are Glint</h2>
            <p>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            <ul className="BackgroundBullets">
                <HeaderFooter uppernumber="127" lowernumber="Awards Received" />
                <HeaderFooter uppernumber="1505" lowernumber="Cups of Coffee" />
                <HeaderFooter uppernumber="109" lowernumber="Projects Completed" />
                <HeaderFooter uppernumber="102" lowernumber="Happy Clients" />
            </ul>
        </div>
    );
}

export default ErsteWebseiteHeader;