import React, { Component } from "react";

export default class LogIn extends Component {
    render() {
        return (
            <form>
                <h3>Log in</h3>

                <div className="form-group">
                    <label>Phone number</label>
                    <input type="phoneNumber" className="form-control" placeholder="Enter phone number" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Log in</button>
                <p className="forgot-password text-right">
                    Don't have an account? <a href="newClient">Register</a>
                </p>
            </form>
        );
    }
}

