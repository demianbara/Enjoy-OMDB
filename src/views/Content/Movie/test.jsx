import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import { movieUnique } from "../../../store/movies";
import Favorite from "../../../components/Card/Fav";
import Card from "../../../components/Card/card";

export default function Test() {
    const { moviesArray } = useSelector((store) => store.movies);
    const dispatch = useDispatch();

    return moviesArray.map((movie) => (
        <div class="card m-3" style={{ width: "18rem" }}>
            <img src={movie.Poster} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">{movie.Title}</p>
            </div>
        </div>
    ));
}

//   <div class="card mb-3" style="max-width: 540px;">
//       <div class="row g-0">
//           <div class="col-md-4">
//               <img src="..." class="img-fluid rounded-start" alt="..." />
//           </div>
//           <div class="col-md-8">
//               <div class="card-body">
//                   <h5 class="card-title">Card title</h5>
//                   <p class="card-text">
//                       This is a wider card with supporting text below as a
//                       natural lead-in to additional content. This content is a
//                       little bit longer.
//                   </p>
//                   <p class="card-text">
//                       <small class="text-muted">Last updated 3 mins ago</small>
//                   </p>
//               </div>
//           </div>
//       </div>
//   </div>;
