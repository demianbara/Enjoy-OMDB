import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { register } from "../../../store/userAuth";
import useForm from "../../../hooks/useForm";

export default function FormRegister() {
    const { handleSubmit , handleChange } = useForm(register, "userAuth", "userCreated", "/users/login");

    return (
        <form onSubmit={handleSubmit} className="w-50 p-5">
            <div className="user-auth-title">Register</div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                />
                <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                    Password
                </label>
                <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" class="btn btn-outline btn-auth">
                Submit
            </button>
        </form>
    );
}
