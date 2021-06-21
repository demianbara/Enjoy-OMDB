import * as React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import FormAuth from "./FormAuth";

export default function User () {
    return (
        <div>
            USERS
            <Route path="/users/register" component={FormAuth} />
        </div>
    );
}