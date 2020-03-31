import React from 'react';

const date = new Date()

let WelcherTag = date.getDay();
let OutputTag;
if (WelcherTag == 0) {
    OutputTag = "Sonntag"
}
if (WelcherTag == 1) {
    OutputTag = "Montag"
}
if (WelcherTag == 2) {
    OutputTag = "Dienstag"
}
if (WelcherTag == 3) {
    OutputTag = "Mittwoch"
}
if (WelcherTag == 4) {
    OutputTag = "Donnerstag"
}
if (WelcherTag == 5) {
    OutputTag = "Freitag"
}
if (WelcherTag == 6) {
    OutputTag = "Samstag"
}

let WelcherMonat = date.getMonth();
let OutputMonth;
if (WelcherMonat == 0) {
    OutputMonth = "Januar"
}
if (WelcherMonat == 1) {
    OutputMonth = "Februar"
}
if (WelcherMonat == 2) {
    OutputMonth = "März"
}
if (WelcherMonat == 3) {
    OutputMonth = "April"
}
if (WelcherMonat == 4) {
    OutputMonth = "Mai"
}
if (WelcherMonat == 5) {
    OutputMonth = "Juni"
}
if (WelcherMonat == 6) {
    OutputMonth = "Juli"
}
if (WelcherMonat == 7) {
    OutputMonth = "August"
}
if (WelcherMonat == 8) {
    OutputMonth = "September"
}
if (WelcherMonat == 9) {
    OutputMonth = "Oktober"
}
if (WelcherMonat == 10) {
    OutputMonth = "November"
}
if (WelcherMonat == 11) {
    OutputMonth = "Dezember"
}

let WelchesJahr = date.getFullYear();

const WhichDay = () => {
    return (
        <div>
            <p style={{ fontSize: "30px", color: "blue" }}>Today is "{OutputTag}"</p>
            <p style={{ fontSize: "20px", color: "green" }}>This Month is "{OutputMonth}"</p>
            <p style={{ fontSize: "3em", color: "green" }}>This Year is "{WelchesJahr}"</p>
        </div>
    );
}

export default WhichDay;



// ---------------------------------- AlternativCode von Anass:----------------------------------
// const weekday = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]
// const Month = ["Januar", "Februar", "März", "April", "Mai", "juni", "juli", "august", "September", "Oktober", "november", "Dezember"]

// let monthNow;
// let dayNow;
// let yearNow;

// // const date = new Date();
// console.log(date.getDay()) //index array
// console.log(date.getMonth()) //index array
// console.log(date.getFullYear())

// monthNow = Month[date.getMonth()];
// dayNow = weekday[date.getDay()];
// yearNow = date.getFullYear();

// const yearStyle = {
//     fontSize: "3em",
//     color: "green"
// }

// const SayHi = () => {
//     return (
//         <div>
//             <p style={{ color: "blue", fontSize: "30px" }}>today is {dayNow}</p>
//             <p style={{ color: "green", fontSize: "50px" }}>this month is {monthNow}</p>
//             <p style={{ color: "green", fontSize: "50px" }}>this year is {yearNow}</p>
//         </div>
//     );
// }

// export default SayHi;
// ---------------------------------- AlternativCode von Anass:----------------------------------
