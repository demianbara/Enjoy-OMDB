import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Movie from './Movie';
import Favorites from './Favorites'
import './style.module.css'
import User from './User';

export default function Content () {
    return (
        <main>
            <Switch>
                <Route exact path='/favs' component={Favorites}></Route>
                <Route exact path='/users' component={User}></Route>
                <Route path='/' component={Movie}></Route>
                <Redirect to='/' />
            </Switch>
        </main>
    )
}