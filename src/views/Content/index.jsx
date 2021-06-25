import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Favorites from './Movie/Favorites';
import User from './User';
import MvUnique from './Movie/MvUnique';
import MvFound from "./Movie/MvFound";
import Welcome from './ReactSpring/welcome';

export default function Content () {
    return (
        <main>
            <Switch>
                <Route exact path="/favs" component={Favorites}></Route>
                <Route path="/movies" component={MvFound}></Route>
                <Route
                    exact
                    path="/movies/:movieId"
                    component={MvUnique}
                ></Route>
                <Route path="/users" component={User}></Route>
                <Route path="/" component={Welcome}></Route>
                <Redirect to="/" />
            </Switch>
        </main>
    );
}