import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from '../../service/AuthenticationService';
import Home from '../../components/Home'

class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            return <Route path="/home" component={Home} />
         
        } else {
            return <Redirect to="/log_in" />
        }

    }
}

export default AuthenticatedRoute