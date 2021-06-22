import * as React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { deleteFavMovie, setFavMovie } from "../../store/favs";

export default function Favorite({ movie }) {
    const dispatch = useDispatch()
    const {pathname} = useLocation()
    console.log(pathname)

    return (
       <div>
           <button onClick={() => {dispatch(setFavMovie(movie))}}>Add Fav</button>
           {pathname === '/favs'
           ? <button onClick={() => {dispatch(deleteFavMovie(movie.imdbID));}}>Remove Fav</button>
            : ""}
       </div>
    );
}
