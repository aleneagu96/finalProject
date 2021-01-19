import React, { Component } from 'react'


class LogoutComponent extends Component {
    render() {
        return (
            <div>

                <div className="container">
                    {/* <h3>You are not loged in</h3> */}
                    <h5>Loging in is only available to our admins!</h5>
                    <h5>Thank you for understanding!</h5>
                </div>
            </div>
        )
    }
}

export default LogoutComponent