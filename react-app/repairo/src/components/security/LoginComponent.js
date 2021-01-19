import React, { Component } from 'react'
import AuthenticationService from '../../service/AuthenticationService';;

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
        if(this.state.username==='admin' && this.state.password==='admin'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/home`)
            //this.setState({showSuccessMessage:true})
            //this.setState({hasLoginFailed:false})
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }

       AuthenticationService
            .executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
                this.props.history.push(`/home`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })

    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                  
                    <div className="form-group">
                         <label>Username</label>
                         <input type="text" name="username" className="form-control" placeholder="Enter username" 
                         value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                         <label>Password</label>
                         <input type="password" name="password" className="form-control" placeholder="Enter password" 
                         value={this.state.password} onChange={this.handleChange} />
                     </div>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
                <br/>
                <h5>Loging in is only available for our admins.</h5>
                <h6>Thank you for understanding!</h6>
            </div>
        )
    }
}

export default LoginComponent