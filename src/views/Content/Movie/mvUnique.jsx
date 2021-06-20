import * as React from 'react';
import { useSelector } from 'react-redux';
import s from './style.module.css'

export default function MvUnique () {
    const { movieSelected } = useSelector(store => store.movies);
    console.log(movieSelected)
    return (
        <div classNameName={s.mvUnique}>
            <h1>{movieSelected.Title}</h1>
            <img src={movieSelected.Poster} alt="" />
            <h4 className={s.plotMovie}>{movieSelected.Plot}</h4>
        </div>
        // <div classNameName="card cardStyle">
        //     <img classNameName="card-img-top" src={movieSelected.Poster} alt="" />
        //     <div classNameName="card-body">
        //         <h5 classNameName="card-title">{movieSelected.Title}</h5>
        //         <p classNameName="card-text">{movieSelected.Plot}</p>
        //         <a href="#" classNameName="btn btn-primary">
        //             Go somewhere
        //         </a>
        //     </div>
        // </div>
       
    );
}