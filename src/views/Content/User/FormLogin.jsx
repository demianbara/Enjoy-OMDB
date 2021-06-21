import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { login, register } from "../../../store/userAuth";

export default function FormLogin() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const history = useHistory();
    const { isLogin } = useSelector((store) => store.userAuth);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        dispatch(login({ email, password }));
        e.preventDefault();
    };

    React.useEffect(() => {
        if (isLogin) {
            history.push("/movies");
        }
    }, [isLogin, history]);

    return (
        <div>
            {" "}
            <h2> LOGIN </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    Email
                    <input
                        type="text"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </label>
                <label htmlFor="">
                    Password
                    <input
                        type="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
