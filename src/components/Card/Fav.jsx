import * as React from "react";
import { useDispatch } from "react-redux";
import { setFavMovie } from "../../store/favs";

export default function Favorite({ movie }) {
    const dispatch = useDispatch()
    console.log(movie)

    return (
       <div>
           <button onClick={() => {dispatch(setFavMovie(movie))}}>Fav</button>
       </div>
    );
}
