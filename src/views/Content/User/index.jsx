import * as React from "react";
import { Link, Switch } from "react-router-dom";
import { Route } from "react-router";
import FormRegister from "./FormRegister";
import FormLogin from "./FormLogin";
import Users from "./users";
import UsersUnique from "./userUnique";
import { useSelector } from "react-redux";

export default function User() {
    return (
        <div className="wrap-form">
            <Switch>
                <Route exact path="/users/register" component={FormRegister} />
                <Route exact path="/users/login" component={FormLogin} />
                <Route exact path="/users" component={Users} />
                <Route path="/users/:id" component={UsersUnique} />
            </Switch>
        </div>
    );
}
