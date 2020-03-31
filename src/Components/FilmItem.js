import React from 'react';
import "./filmitem.css"

const FilmItem = (props) => {
    return (
        <article>
            <h1 className={props.isNew ? "red" : "green"}>{props.FilmItem}>{props.filmName}</h1>
        </article>);
}

export default FilmItem;