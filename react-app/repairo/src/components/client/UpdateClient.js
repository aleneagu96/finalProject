import React, { Component } from 'react'

import ClientService from '../../service/ClientService';

class UpdateClient extends Component {

    constructor(props){
        super(props);

        this.state ={
            clientId: this.props.match.params.id,
            clientFirstName: '',
            clientLastName: '',
            clientPhoneNumber: '',
        }
        this.changeFirstNameHandler= this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changePhoneNumberHandler= this.changePhoneNumberHandler.bind(this);
        this.updateClient= this.updateClient.bind(this);
        this.saveClient = this.saveClient.bind(this);
        this.loadClient = this.loadClient.bind(this);
    }

    componentDidMount() {
        this.loadClient();
    }

    loadClient(clientId) {
        ClientService.get(clientId)
            .then((res) => {
                let client = res.data.result;
                this.setState({
                clientId: client.clientId,
                clientFirstName: client.clientFirstName,
                clientLastName: client.clientLastName,
                clientPhoneNumber: client.clientPhoneNumber,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.clientFirstName]: e.target.value });

    saveClient = (e) => {
        e.preventDefault();
        let client = {clientId: this.state.clientId, clientFirstName: this.state.clientFirstName, clientLastName: this.state.clientLastName, clientPhoneNumber: this.state.clientPhoneNumber};
        ClientService.update(client)
            .then(res => {
                this.setState({message : 'Client updated successfully.'});
                this.props.history.push('/clients/update');
            });
    }

   updateClient = (e) => {
       e.preventDefault();
       let client = {clientId: this.state.clientId,
           clientFirstName: this.state.clientFirstName,
                        clientLastName: this.state.clientLastName,
                        clientPhoneNumber: this.state.clientPhoneNumber,
};

        console.log('client => ' + JSON.stringify(client));
        console.log('id =>' + JSON.stringify(this.state.clientId));
        ClientService.update(client, this.state.clientId).then( res => {
            this.props.history.push('/clients');
        });
   }

   changeFirstNameHandler= (event) => {
       this.setState({clientFirstName: event.target.value});
   }

   changeLastNameHandler= (event) => {
       this.setState({clientLastName: event.target.value});
   }

   changePhoneNumberHandler= (event) => {
       this.setState({clientPhoneNumber: event.target.value});
   }

  

   cancel(){
       this.props.history.push('/clients');
   }

    render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Client </h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Client's first name: </label>
                                        <input placeholder="First Name" name="clientFirstName" className="form-control" 
                                            value={this.state.clientFirstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Client's last Name: </label>
                                        <input placeholder="Last Name" name="clientLastName" className="form-control" 
                                            value={this.state.clientLastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Client's phone number </label>
                                        <input placeholder="Phone number" name="clientPhoneNumber" className="form-control" 
                                            value={this.state.clientPhoneNumber} onChange={this.changePhoneNumberHandler}/>
                                    </div>
                                

                                    {/* <button className="btn btn-success" onClick={this.updateClient}>Save</button> */}
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    <button className="btn btn-success" onClick={this.saveClient}>Save</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
    );
    }
}

export default UpdateClient 

    

   