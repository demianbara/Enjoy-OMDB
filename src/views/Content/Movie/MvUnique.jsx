import * as React from "react";
import { useSelector } from "react-redux";

export default function MvUnique() {
    const { movieSelected } = useSelector((store) => store.movies);
    const arrayGenres = movieSelected.Genre ? movieSelected.Genre.split(",").map((x) => x.trim()).splice(0,3) : [];

    return (
        <div className="d-flex flex-wrap justify-content-center align-center">
            <div className="movie-unique">
                <div class="card-unique mb-3" style={{ width: "1000px" }}>
                    <div class="d-flex">
                        <div class="col-md-4 d-flex flex-column">
                            <img
                                src={movieSelected.Poster}
                                class="img-movie-unique"
                                alt="..."
                            />
                            <div className="d-flex flex-wrap">
                                {arrayGenres.map((genre) => (
                                    <div className="genre-unique">{genre}</div>
                                ))}
                            </div>
                        </div>
                        <div class="col-md-8 d-flex">
                            <div class="card-body d-flex flex-column">
                                <div>
                                    <h5 class="card-title">
                                        {movieSelected.Title}
                                    </h5>
                                    <p class="card-text">
                                        {movieSelected.Plot}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

