import * as React from 'react';
import { useSelector } from 'react-redux';
import s from './style.module.css'

export default function MvUnique () {
    const { movieSelected } = useSelector(store => store.movies);
    console.log(movieSelected)
    return (
        <div className={s.mvUnique}>
            <h1>{movieSelected.Title}</h1>
            <img src={movieSelected.Poster} alt="" />
        </div>
        // <div className="card cardStyle">
        //     <img className="card-img-top" src={movieSelected.Poster} alt="" />
        //     <div className="card-body">
        //         <h5 className="card-title">{movieSelected.Title}</h5>
        //         <p className="card-text">{movieSelected.Plot}</p>
        //         <a href="#" className="btn btn-primary">
        //             Go somewhere
        //         </a>
        //     </div>
        // </div>
    );
}