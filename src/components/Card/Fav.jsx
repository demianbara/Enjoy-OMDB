import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { deleteFavMovie, setFavMovie } from "../../store/favs";
import { FaHeart } from "react-icons/fa";
import { message, Tooltip } from "antd";

export default function Favorite({ movie }) {
    const {isLogin} = useSelector(store => store.userAuth)
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const handleClick = () => {
        if(!isLogin) message.error('You need to be loged in')
        else {
            dispatch(setFavMovie(movie))
            message.success('Added to Favorites')
        }
    } 

    return (
        <div className="align-self-end">
            <Tooltip placement="leftBottom" title='Add to favorites'>
                <FaHeart
                    className="faHeart"
                    style={{ cursor: "pointer" }}
                    onClick={handleClick}
                />
            </Tooltip>
        </div>
    );
}
