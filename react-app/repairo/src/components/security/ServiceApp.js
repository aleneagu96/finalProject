import React, { Component } from 'react';
import Home from '../Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from '../security/LoginComponent';
import LogoutComponent from './/LogoutComponent';
import MenuComponent from '../security/MenuComponent';
import AuthenticatedRoute from '../security/AuthenticatedRoute';

class ServiceApp extends Component {


    render() {
        return (
            <>
                <Router>
                    <>
                        <MenuComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/log_in" exact component={LoginComponent} />
                            <AuthenticatedRoute path="/logout" exact component={LogoutComponent} /> 
                            <AuthenticatedRoute path="/home" exact component={Home} />
                        </Switch>
                    </>
                </Router>
            </>
        )
    }
}

export default ServiceApp