import * as React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router";
import FormRegister from "./FormRegister";
import FormLogin from "./FormLogin";
import Users from "./Users";
import UserUnique from "./UserUnique";


export default function User() {
    return (
        <div className="wrap-form">
            <Switch>
                <Route exact path="/users/register" component={FormRegister} />
                <Route exact path="/users/login" component={FormLogin} />
                <Route exact path="/users" component={Users} />
                <Route path="/users/:id" component={UserUnique} />
            </Switch>
        </div>
    );
}
