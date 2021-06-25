import * as React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

export default function MvUnique() {
    const { movieSelected } = useSelector((store) => store.movies);
    const history = useHistory();
    const arrayGenres = movieSelected.Genre
        ? movieSelected.Genre.split(",")
              .map((x) => x.trim())
              .splice(0, 3)
        : [];

    return (
        <div className="d-flex flex-wrap justify-content-center align-center">
            <div className="goBackBtn" onClick={() => history.goBack()}>
                <svg class="svg-icon" viewBox="0 0 20 20">
                    <path
                        fill="none"
                        d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
          L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
          c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
          c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
          S18.707,9.212,18.271,9.212z"
                    ></path>
                </svg>
            </div>
            <div className="movie-unique">
                <div className="card-unique mb-3" style={{ width: "1000px" }}>
                    <div className="d-flex">
                        <div className="col-md-4 d-flex flex-column">
                            <Link to="/movies">
                                <img
                                    src={movieSelected.Poster}
                                    className="img-movie-unique"
                                    alt="..."
                                />
                            </Link>
                            <div className="d-flex flex-wrap">
                                {arrayGenres.map((genre) => (
                                    <div key={genre} className="genre-unique">
                                        {genre}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-8 d-flex">
                            <div className="card-body d-flex flex-column">
                                <div>
                                    <h5 className="card-title">
                                        {movieSelected.Title}
                                    </h5>
                                    <p className="card-text">
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
