import * as React from "react";
import { useSelector } from "react-redux";
import s from "./style.module.css";

export default function MvUnique() {
    const { movieSelected } = useSelector((store) => store.movies);
    // const arrayGenres = movieSelected.split(",").map(x => x.trim())

    return (
        <div className="movie-unique">
            <div class="card mb-3" style={{ width: "1000px" }}>
                <div class="row g-0">
                    <div class="col-md-4 d-flex flex-direction-column">
                        <img
                            src={movieSelected.Poster}
                            class="img-fluid rounded-start p-3"
                            alt="..."
                        />
                        {/* {arrayGenres.map(x => (
                            
                        ))} */}
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{movieSelected.Title}</h5>
                            <p class="card-text">{movieSelected.Plot}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
