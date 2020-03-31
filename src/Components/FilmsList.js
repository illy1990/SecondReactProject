import React from 'react';
import FilmItem from './FilmItem';

const FilmList = () => {
    return (
        <section>
            {/* <article>
                <h1>The Irishman</h1>
            </article>
            <article>
                <h1>The Lighthouse</h1>
            </article>
            <article>
                <h1>1917</h1>
            </article>
            <article>
                <h1>Parasite</h1>
            </article> */}

            <FilmItem filmName="The Irishman" />
            <FilmItem filmName="The Lighthouse" />
            <FilmItem filmName="1917" />
            <FilmItem filmName="Parasite" />
        </section>
    );
}

export default FilmList;



// document.body.innerHTML = `
// film1 <br>
// film2 <br>
// film3 <br>
// film4 <br>
// film5 <br>
// `

// function showFilm(str) {
//     document.body.innerHTML += str
// }
// document.body.innerHTML = `
// ${showFilm("Film1")} <br>
// ${showFilm("Film2")} <br>
// ${showFilm("Film3")} <br>
// ${showFilm("Film4")} <br>

// `   