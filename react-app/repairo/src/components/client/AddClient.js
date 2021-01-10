import React, { Component } from 'react'
import ClientService from "../../service/ClientService";

class AddClient extends Component{

    constructor(props){
        super(props);
        this.onChangeFirstName= this.onChangeFirstName.bind(this);
        this.onChangeLastName= this.onChangeLastName.bind(this);
        this.onChangePhoneNumber= this.onChangePhoneNumber.bind(this);
        this.saveClient= this.saveClient.bind(this);
        this.newClient= this.newClient.bind(this);

        this.state = {
            id: null,
            clientFirstName: "",
            clientLastName: "",
            clientPhoneNumber: ""
        };
    }

    onChangeFirstName(e) {
        this.setState({
            clientFirstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            clientLastName: e.target.value
        });
    }

    onChangePhoneNumber(e) {
        this.setState({
            clientPhoneNumber: e.target.value
        });
    }

    saveClient() {
        var data = {
            clientFirstName: this.state.clientFirstName,
            clientLastName: this.state.clientLastName,
            clientPhoneNumber: this.state.clientPhoneNumber
        };

    ClientService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    clientFirstName: response.data.clientFirstName,
                    clientLastName: response.data.clientLastName,
                    clientPhoneNumber: response.data.clientPhoneNumber
                });
            console.log(response.data);
            alert("Account created");
            })
            .catch(e => {
                console.log(e);
            });
    }

    newClient() {
        this.setState({
            id: null,
            clientFirstName: "",
            clientLastName: "",
            clientPhoneNumber: "",
        });
    }

    render() {
        return (
            <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newClient}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required value={this.state.clientFirstName}
                onChange={this.onChangeFirstName}
                name="firstName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
                value={this.state.clientLastName}
                onChange={this.onChangeLastName}
                name="lastName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone number</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                required
                value={this.state.clientPhoneNumber}
                onChange={this.onChangePhoneNumber}
                name="phoneNumber"
              />
            </div>

            <button onClick={this.saveClient} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
        );
    }


}

 export default AddClient
