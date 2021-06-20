import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MvSearch from './mvSearch';
import MvFound from './mvFound';
import s from './style.module.css';
import MvUnique from './mvUnique';
import Favorites from '../Favorites';

export default function Movie () {
    return (
        <div className={s.movieContent}>
            <MvSearch />
            <Switch>
                <Route exact path="/movies" component={MvFound}></Route>
                <Route path="/movies/:movieId" component={MvUnique}></Route>
                <Redirect to="/movies" />
            </Switch>
        </div>
    );
}