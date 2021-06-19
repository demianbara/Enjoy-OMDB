import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MvSearch from './mvSearch';
import MvFound from './mvFound';
import s from './style.module.css';
import MvUnique from './mvUnique';

export default function Movie () {
    return (
        <div className={s.movieContent}>
            <MvSearch />
            <Switch>
                {/* <Route exact path="/" component={MvSearch}></Route> */}
                <Route exact path="/movies" component={MvFound}></Route>
                <Route path="/movies/:movieId" component={MvUnique}></Route>
                {/* <Redirect to="/" /> */}
            </Switch>
        </div>
    );
}