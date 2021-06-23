import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Movie from './Movie';
import Favorites from './Favorites'
import './style.module.css'
import User from './User';
import MvUnique from './Movie/mvUnique';

export default function Content () {
    return (
        <main>
            <Switch>
                <Route path="/favs" component={Favorites}></Route>
                <Route path="/users" component={User}></Route>
                <Route exact path="/movies" component={Movie}></Route>
                <Route path="/movies/:movieId" component={MvUnique}></Route>
                <Redirect to="/" />
            </Switch>
        </main>
    );
}