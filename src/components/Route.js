import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import history from '../Helpers/RouteHelpers/History';
import Layout from '../containers/Layout';
import DetailsPage from '../components/DetailsPage';

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={Layout}/>
                <Route path='/moviedetails' component={DetailsPage}/>
            </Switch>
        </Router>
    )
}

export default Routes