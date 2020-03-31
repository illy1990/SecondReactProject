import React from 'react';


const date = new Date()
let hours = date.getHours();
let timeOfDay;

if (hours < 12) {
    timeOfDay = "Good morning"
} else {
    timeOfDay = "Good evening"
}

const styleH1 = {
    color: '#464820',
    letterSpacing: 3,
    fontSize: "40px"
}

const SayHi = () => {
    return (
        <div>
            <h1 style={styleH1}>SayHi</h1>
            <h1 style={{ color: "red", fontSize: "40px" }}>{timeOfDay}</h1>
        </div >
    );
}

export default SayHi;