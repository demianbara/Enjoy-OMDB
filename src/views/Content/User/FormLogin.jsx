import * as React from "react";
import useForm from "../../../hooks/useForm";
import { login } from "../../../store/userAuth";

export default function FormLogin() {
    const { handleSubmit, handleChange } = useForm(
        login,
        "userAuth",
        "isLogin",
        "/"
    );

    return (
        <form onSubmit={handleSubmit} className="w-50 p-5">
            <div className="user-auth-title">Login</div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                />
                <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                </div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-outline btn-auth">
                Submit
            </button>
        </form>
    );
}
