import { message } from "antd";
import * as React from "react";
import { useSelector } from "react-redux";
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
        // <div>
        //     {" "}
        //     <h2> LOGIN </h2>
        //     <form onSubmit={handleSubmit}>
        //         <label htmlFor="">
        //             Email
        //             <input
        //                 type="text"
        //                 onChange={(e) => {
        //                     setEmail(e.target.value);
        //                 }}
        //             />
        //         </label>
        //         <label htmlFor="">
        //             Password
        //             <input
        //                 type="password"
        //                 onChange={(e) => {
        //                     setPassword(e.target.value);
        //                 }}
        //             />
        //         </label>
        //         <input type="submit" value="Submit" />
        //     </form>
        // </div>
    );
}

{
    /* <form onSubmit={handleSubmit}>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
            Email address
        </label>
        <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
                setEmail(e.target.value);
            }}
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
            onChange={(e) => {
                setPassword(e.target.value);
            }}
        />
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
            Check me out
        </label>
    </div>
    <button type="submit" class="btn btn-primary">
        Submit
    </button>
</form>; */
}
