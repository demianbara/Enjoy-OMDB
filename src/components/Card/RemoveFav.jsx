import * as React from "react";
import { useDispatch } from "react-redux";
import { deleteFavMovie } from "../../store/favs";
import { AiTwotoneDelete } from "react-icons/ai";
import { message, Tooltip } from "antd";

export default function RemoveFavorite({ movie }) {
    const dispatch = useDispatch();

    const handleClick = () => {
            dispatch(deleteFavMovie(movie));
            message.warning("Deleted from favorites");
    };

    return (
        <div className="align-self-end">
            <Tooltip placement="leftBottom" title="Delete from favorites">
                <AiTwotoneDelete
                    className="RiDeleteBinFill"
                    style={{ cursor: "pointer" }}
                    onClick={handleClick}
                />
            </Tooltip>
        </div>
    );
}
