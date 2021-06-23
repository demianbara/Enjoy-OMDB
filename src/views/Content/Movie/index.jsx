import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MvSearch from './mvSearch';
import MvFound from './mvFound';
import s from './style.module.css';
import MvUnique from './mvUnique';
import Favorites from '../Favorites';
import Test from './test'

export default function Movie () {
    return (
        <div className="d-flex flex-wrap justify-content-center align-center">
            <Switch>
                <Route exact path="/movies" component={Test}></Route>
                <Route path="/movies/:movieId" component={MvUnique}></Route>
                <Redirect to="/movies" />
            </Switch>
        </div>
    );
}