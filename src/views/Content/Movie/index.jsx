import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MvUnique from './mvUnique';
import Test from './test'
import Footer from '../../Footer/Footer';
import { useSelector } from 'react-redux';

export default function Movie () {
    const { moviesArray } = useSelector((store) => store.movies);

    return (
        <div>
            <div className="d-flex flex-wrap justify-content-center align-center">
                <Switch>
                    <Route exact path="/movies" component={Test}></Route>
                    <Route path="/movies/:movieId" component={MvUnique}></Route>
                    <Redirect to="/movies" />
                </Switch>
            </div>
            {moviesArray.length > 0 
            ?<div className='d-flex justify-content-center'>
                <Footer />
            </div>
            : ""}
        </div>
    );
}