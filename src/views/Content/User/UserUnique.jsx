import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { movieUnique } from "../../../store/movies";

export default function UserUnique() {
    const { userSelect, loading } = useSelector((store) => store.users);
    const { isLogin } = useSelector((store) => store.userAuth);
    const dispatch = useDispatch();

    return (
        <div>
            {isLogin && !loading ? (
                <div>
                    <div className="users-name">
                        {userSelect.email.split("@")[0]}'s Favorites
                    </div>
                    <div className="d-flex flex-wrap justify-content-center align-center">
                        {userSelect.favoritos &&
                            userSelect.favoritos.map((movie) => (
                                <div
                                    key={movie.imdbID}
                                    className="card"
                                    style={{ width: "18rem" }}
                                >
                                    <Link
                                        to={`/movies/${movie.imdbID}`}
                                        onClick={() => {
                                            dispatch(movieUnique(movie.imdbID));
                                        }}
                                    >
                                        <img
                                            src={movie.Poster}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                    </Link>
                                    <div className="card-body d-flex justify-content-between">
                                        <p className="card-text">
                                            {movie.Title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
