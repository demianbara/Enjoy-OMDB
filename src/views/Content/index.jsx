import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Movie from './Movie';
import Favorites from './Favorites'
import './style.module.css'

export default function Content () {
    return (
        <main>
            <Switch>
                <Route exact path='/favs' component={Favorites}></Route>
                <Route path='/' component={Movie}></Route>
                {/* <Route path='' component={}></Route> */}
                <Redirect to='/' />
            </Switch>
        </main>
    )
}